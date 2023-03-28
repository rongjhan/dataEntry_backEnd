from flask import Blueprint,jsonify
from flask.helpers import make_response,send_from_directory,redirect,url_for
from flask.globals import request,current_app,session
from flask.templating import DispatchingJinjaLoader,render_template
from flask_login import login_required, current_user
from model import db_session
from model.util import config_orm,CONFIG_NAME
from model import Platform,SoureOption,TransformOption,VizOption
from model.user.settings import VizConfigDeps,TransformConfigDeps,SourceConfig,TransformConfig
from typing import Optional,Literal
from util.getConfigName import gen_config_name
from sqlalchemy.sql import select,delete,insert

edtitor_bp = Blueprint('editor', __name__,template_folder="../static/editor")


@edtitor_bp.route('/editor/<path:filename>',methods=["GET","POST"])
@login_required
def editorPage(filename):
    if filename=="editor.html":
        # print(current_user.user_account,current_user.user_name)
        platform = db_session.execute(
            select(Platform).where((Platform.name==request.form.get("platform")))
        ).scalars().first()

        session["platform"]=platform.name
        session["project"]=request.form.get("project")

        if(current_user.level >= platform.permit_level):
            if(platform.name=="web"):
                return render_template(filename)
            else:
                return render_template(filename)
        else:
            return "you should upgrade to work in office add-in"

    else:
        return send_from_directory("static/editor",filename)


@edtitor_bp.route('/init')
@login_required
def init():
    platform = session["platform"] or "web"
    user_level = current_user.level or 1
    available_source = db_session.execute(
        select(SoureOption.option_name)
        .where(user_level>=SoureOption.permit_level)
        .where(SoureOption.platform_support.contains(platform))
    ).scalars().all()

    available_transform = db_session.execute(
        select(TransformOption.option_name)
        .where(user_level>=TransformOption.permit_level)
        .where(TransformOption.platform_support.contains(platform))
    ).scalars().all()

    available_visualize = db_session.execute(
        select(VizOption.option_name)
        .where(user_level>=VizOption.permit_level)
        .where(VizOption.platform_support.contains(platform))
    ).scalars().all()

    return jsonify({
        "availableSource":[s for s in available_source],
        "availableTransform":[t for t in available_transform],
        "availableVisualize":[v for v in available_visualize]
    })



@edtitor_bp.route('/configs')
@login_required
def getConfigs():
    user = current_user.user_account
    platform = session["platform"]
    project = session["project"]
    config_type:CONFIG_NAME= request.args.get("configType")

    orm = config_orm(config_type)

    configs = db_session.execute(
            select(orm)
            .where(orm.user_account==user)
            .where(orm.project_name==project)
    ).scalars().all()

    return jsonify([c.config_name for c in configs])


@edtitor_bp.route('/config')
@login_required
def getConfig():
    user = current_user.user_account
    project = session["project"]

    config_type:CONFIG_NAME= request.args.get("configType")
    config_name:str= request.args["configName"]

    orm = config_orm(config_type)

    config = db_session.execute(
            select(orm)
            .where(orm.user_account==user)
            .where(orm.project_name==project)
            .where(orm.config_name==config_name)
    ).scalars().first()

    if config_type == "source" :
        return jsonify({"name":config.config_name,"option":config.option,"settings":config.settings,})
    else :
        source_deps = [i.source_dep.config_name for i in config.dependencies if i.source_dep != None]
        if config_type == "visualize":
            transform_deps = [i.transform_dep.config_name for i in config.dependencies if i.transform_dep != None]
            return jsonify({"name":config.config_name,
                    "option":config.option,
                    "settings":config.settings,
                    "sourceDeps" : source_deps,
                    "transformDeps" : transform_deps,
                    })
        
        return jsonify({"name":config.config_name,
                    "option":config.option,
                    "settings":config.settings,
                    "sourceDeps" : source_deps,
                    })


@edtitor_bp.route('/addConfig')
@login_required
def addConfig():
    user = current_user.user_account
    project = session["project"]
    config_type:CONFIG_NAME= request.args["configType"]

    orm = config_orm(config_type)

    configs = db_session.execute(
        select(orm.config_name)
        .where(orm.user_account==user)
        .where(orm.project_name==project)
    ).scalars().all()

    new_config_name = gen_config_name(configs)
    db_session.add(
        orm(config_name=new_config_name,project_name=project,user_account=user,option="")
    )

    db_session.commit()

    return new_config_name


@edtitor_bp.route('/delConfig')
@login_required
def delConfig():
    user = current_user.user_account
    project = session["project"]
    config_type:CONFIG_NAME= request.args["configType"]
    config_name:str = request.args["configName"]

    orm = config_orm(config_type)
    
    db_session.execute(
        delete(orm)
        .where(orm.user_account==user)
        .where(orm.project_name==project)
        .where(orm.config_name==config_name)
    )
    db_session.commit()

    return "success"


@edtitor_bp.route('/editConfig',methods=["POST"])
@login_required
def editConfig():
    user = current_user.user_account
    project = session["project"]
    config_type:CONFIG_NAME= request.json.pop("configType")
    config_name = request.json.pop("configName")

    config_setting = request.json.pop("settings")
    source_deps = config_setting.pop("sourceDeps",None)
    transform_deps = config_setting.pop("transformDeps",None)

    orm = config_orm(config_type)
    config = db_session.execute(
        select(orm)
        .where(orm.user_account==user)
        .where(orm.project_name==project)
        .where(orm.config_name==config_name)
    ).scalars().first()

    config.option= config_setting.pop("option")
    config.config_name=config_setting.pop("newName")
    config.settings=str(config_setting).replace('"','\\"')


    db_session.flush()
    db_session.commit()
    
    if(config_type=="visualize"):
        db_session.execute(
            delete(VizConfigDeps).where(VizConfigDeps.config_id==config.id)
        )
        
        if (source_deps!=[]):
            db_session.execute(insert(VizConfigDeps),
                [{
                    "config_id":config.id,
                    "source_dep_id":db_session.execute(
                        select(SourceConfig)
                        .where(SourceConfig.user_account==user)
                        .where(SourceConfig.project_name==project)
                        .where(SourceConfig.config_name==i)
                    ).scalars().first().id
                } for i in source_deps]
            )
        if (transform_deps!=[]):
            db_session.execute(insert(VizConfigDeps),
                [{
                    "config_id":config.id,
                    "transform_dep_id":db_session.execute(
                        select(TransformConfig)
                        .where(TransformConfig.user_account==user)
                        .where(TransformConfig.project_name==project)
                        .where(TransformConfig.config_name==i)
                    ).scalars().first().id
                } for i in transform_deps]
            )
        

    if(config_type=="transform"):
        db_session.execute(
            delete(TransformConfigDeps).where(TransformConfigDeps.config_id==config.id)
        )
        if (source_deps!=[]):
            db_session.execute(insert(TransformConfigDeps),
                [{
                    "config_id":config.id,
                    "source_dep_id":db_session.execute(
                        select(SourceConfig)
                        .where(SourceConfig.user_account==user)
                        .where(SourceConfig.project_name==project)
                        .where(SourceConfig.config_name==i)
                    ).scalars().first().id
                } for i in source_deps]
            )

    db_session.commit()
    db_session.close()

    return "success"


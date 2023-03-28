from flask import Blueprint,render_template,send_from_directory,redirect,url_for,jsonify
from flask.globals import request,current_app
from flask.templating import DispatchingJinjaLoader
from flask_login import login_required, current_user
from typing import Optional,Literal
from model import Project,db_session
from sqlalchemy import select

home_bp = Blueprint('home', __name__,template_folder="../static/home")


@home_bp.route('/home/<path:filename>')
@login_required
def homePage(filename):
    if filename=="index.html":
        return render_template(filename)
    else:
        return send_from_directory("static/home",filename)


@home_bp.route('/projects')
@login_required
def projects():
    projects = db_session.execute(
            select(Project).where(Project.user_account==current_user.user_account)
        ).scalars().all()
    
    # print(projects)
    return jsonify([p.project_name for p in projects])




    




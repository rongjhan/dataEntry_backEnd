from flask import Blueprint,jsonify
from flask.helpers import make_response,send_from_directory,redirect,url_for
from flask.globals import request,current_app,session
from flask.templating import DispatchingJinjaLoader,render_template
from flask_login import login_required, current_user
from typing import Optional,Literal
from model import Project,db_session
from sqlalchemy import select

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    if current_user.is_authenticated:
        return redirect(url_for("home.homePage",filename="index.html"))
    else :
        return redirect(url_for("login.loginPage"))
    # return send_from_directory("taskpane","taskpane.html")
    # 不將taskpane目錄放在目錄static目錄中,
    # 並使用return current_app.send_static_file("taskpane/taskpane.html")
    # 是因為 app.view_functions['static'] = login_required(app.send_static_file) 無法對Static子目錄起到作用
    # 以至於未登錄也可以訪問taskpane.html
    # 可參考 https://stackoverflow.com/questions/27611671/restrict-static-file-access-to-logged-in-users

@main_bp.route('/clientCheck')
@login_required
def clientCheck():
    project:str = request.args.get("project")
    # current_app.template_folder="templates"
    # current_app.jinja_env.loader = DispatchingJinjaLoader(current_app)

    return render_template("clientCheck.j2",project=project) 


@main_bp.route('/dashBoard/<path:filename>')
@login_required
def dashBoardPage(filename):
    return send_from_directory("static/member",filename)





    




from flask import Blueprint,current_app,redirect,url_for,request
from flask_login import login_required, logout_user,login_user,current_user
from model import User,db_session


login_bp = Blueprint('login', __name__)

@login_bp.route('/login', methods=['GET', 'POST'])
def loginPage():
    if current_user.is_authenticated:
        return redirect(url_for('main.homePage'))
    return current_app.send_static_file("login/login.html")


@login_bp.route('/verifyLogin', methods=['POST'])
def verify():
    account = request.form.get('account')
    password = request.form.get("password")
    user = db_session.get(User,account)
    # user = User.query.filter_by(user_account=account).one_or_none()
    print(user)

    if user is not None and user.validate_password(password):
        login_user(user)
        return redirect(url_for("main.index"))
    else :
        return redirect(url_for('login.loginPage'))


@login_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login.loginPage'))


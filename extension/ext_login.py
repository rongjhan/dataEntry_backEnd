from flask_login import LoginManager
from model.user.user import User
from model import db_session
login_manager = LoginManager()

@login_manager.user_loader
def load_user(user_account):
    #當request中有攜帶login相關cookie,Flask-login會用此直接去資料庫抓資料,返回值可用current_user取得
    user = db_session.get(User,user_account)
    return user

login_manager.login_view = 'login.loginPage' #當在登出狀態下訪問login reuquired網域會自動跳轉自auth.login頁面
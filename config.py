import sys
import os


windows = sys.platform.startswith("win")
prefix = "sqlite:///" if windows else "sqlite:////"

dirpath = os.path.abspath( os.path.dirname(__file__))
# os.path.dirname 顯示文件所在目錄 

class BaseConfig():
    DATA_FOLDER = './data'
    SQLALCHEMY_TRACK_MODIFICATIONS =False
    SECRET_KEY = "a/i/wu/a/o" #生產環境時最好由環境變量獲取
    SESSION_COOKIE_SAMESITE = "None" #當此flask app於iframe環境時,需允許此cookies作為第三方cookie傳送
    SESSION_COOKIE_SECURE = True #瀏覽器為安全因素考量,需搭配此設置

class DevelopmentConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'


class ProductionConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = prefix + dirpath+"\\"+"backend.db"
    print(SQLALCHEMY_DATABASE_URI)
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}

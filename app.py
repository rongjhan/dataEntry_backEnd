from flask.app import Flask
from blueprint import allbp
from config import config
from extension.ext_login import login_manager
import os

def create_app(config_type=None): 
    # flask 會自動呼叫FLASK_APP模組內工廠函數(預設為呼叫create_app("dev")函式,也可透過FLASK_APP自定義)
    if config_type is None:
        config_type = os.getenv('FLASK_ENV', 'production')
        #os.getenv第二參數表示若無FLASK_ENV環境變數則返回第二參數值
    
    app = Flask('dataEntry')
    
    app.config.from_object(config[config_type])

    for bp in allbp:
        app.register_blueprint(bp)
    
    login_manager.init_app(app)

    return app








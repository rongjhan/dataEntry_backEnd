from threading import get_ident
from sqlalchemy.orm import sessionmaker,scoped_session
from sqlalchemy.engine.create import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy import event,DDL
from .base import Base
from .app.user_level import UserLevel
from .app.platform import Platform
from .app.functionality import SoureOption,TransformOption,VizOption
from .user.user import User
from .user.project import Project
from .user.settings import SourceConfig,TransformConfig,VizConfig



engine = create_engine('sqlite:///e:\\dataEntryV4\\backend\\test.db')

@event.listens_for(engine, "connect") #for sqlite
def set_sqlite_pragma(dbapi_connection, connection_record):
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


db_session = scoped_session(sessionmaker(engine),get_ident)
#https://stackoverflow.com/questions/71695691/flask-app-ctx-stack-ident-func-error-due-to-ident-func-deprecated-in-we



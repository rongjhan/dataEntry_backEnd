from model import Base,engine,User,Project
from model import UserLevel,Platform,SoureOption,TransformOption,VizOption
from model import db_session
from sqlalchemy.sql import insert
from werkzeug.security import generate_password_hash
from datetime import date

Base.metadata.create_all(engine)


db_session.add_all([
    UserLevel(level=1,level_name="free"),
    UserLevel(level=2,level_name="golden"),
    UserLevel(level=3,level_name="diamond"),
])
db_session.commit()
db_session.add_all([
    Platform(name="web",permit_level=1),
    Platform(name="office",permit_level=2)
])
db_session.commit()
db_session.add_all([
    SoureOption(option_name="upload",permit_level=1,platform_support="web,office"),
    SoureOption(option_name="stockApi",permit_level=1,platform_support="web,office"),
    SoureOption(option_name="api",permit_level=3,platform_support="web,office"),
    SoureOption(option_name="excel",permit_level=1,platform_support="office"),
    SoureOption(option_name="",permit_level=1,platform_support="web,office"),
    TransformOption(option_name="merge",permit_level=1,platform_support="web,office"),
    TransformOption(option_name="python",permit_level=3,platform_support="web,office"),
    TransformOption(option_name="javascript",permit_level=2,platform_support="web,office"),
    TransformOption(option_name="",permit_level=1,platform_support="web,office"),
    VizOption(option_name="stack",permit_level=1,platform_support="web,office"),
    VizOption(option_name="candleStick",permit_level=1,platform_support="web,office"),
    VizOption(option_name="connectDot",permit_level=1,platform_support="web,office"),
    VizOption(option_name="geoTaiwan",permit_level=3,platform_support="web,office"),
    VizOption(option_name="geoUS",permit_level=3,platform_support="web,office"),
    VizOption(option_name="geoWorld",permit_level=3,platform_support="web,office"),
    VizOption(option_name="line",permit_level=1,platform_support="web,office"),
    VizOption(option_name="relation",permit_level=1,platform_support="web,office"),
    VizOption(option_name="scatter",permit_level=3,platform_support="web,office"),
    VizOption(option_name="tree",permit_level=3,platform_support="web,office"),
    VizOption(option_name="",permit_level=1,platform_support="web,office"),
])


db_session.commit()

db_session.add(User(
    user_account="admin",
    user_name="GOD",
    passwd_hash=generate_password_hash("admin"),
    email="a12345@gmail.com",
    birthday=date(2020,10,10),
    last_login=date(2021,9,10),
    level=3,
    level_deadline=date(2023,12,31)
))

db_session.add(User(
    user_account="normal",
    user_name="normal",
    passwd_hash=generate_password_hash("normal"),
    email="a54321@gmail.com",
    birthday=date(2020,10,10),
    last_login=date(2021,9,10),
    level=1,
    level_deadline=date(2023,12,31)
))

db_session.commit()

db_session.add(Project(
    project_name="project_1",
    user_account="admin",
    create_date=date(2020,10,10),
    last_modify=date(2021,9,10),
))

db_session.add(Project(
    project_name="project_1",
    user_account="normal",
    create_date=date(2020,10,10),
    last_modify=date(2021,9,10),
))

db_session.commit()

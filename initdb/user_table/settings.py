from sqlalchemy.sql.sqltypes import Integer,String,Date
from sqlalchemy import Table,Column,ForeignKey
from sqlalchemy import ForeignKeyConstraint
from init import meta

source_settings = Table(
    "source_settings",
    meta,
    Column("data_name", String(16), primary_key=True),
    Column("project_name",String(16), primary_key=True),
    Column("user_account",String(16),primary_key=True),
    Column("source_method",String,ForeignKey("source_methods.method_name"),nullable=False),
    Column("settings",String,nullable=False),
    ForeignKeyConstraint(["project_name","user_account"],["projects.project_name","projects.user_account"])
    #若對應composite primary key 則要用composite foreign key , 必須用ForeignKeyConstraint才能建立複合外鍵
)


op_settings = Table(
    "op_settings",
    meta,
    Column("data_name", String(16), primary_key=True),
    Column("project_name",String(16), primary_key=True),
    Column("user_account",String(16),primary_key=True),
    Column("op_method",String,ForeignKey("op_methods.method_name"),nullable=False),
    Column("settings",String,nullable=False),
    ForeignKeyConstraint(["project_name","user_account"],["projects.project_name","projects.user_account"])
    #若對應composite primary key 則要用composite foreign key , 必須用ForeignKeyConstraint才能建立複合外鍵

)


chart_settings = Table(
    "chart_settings",
    meta,
    Column("chart_name", String(16), primary_key=True),
    Column("project_name",String(16), primary_key=True),
    Column("user_account",String(16),primary_key=True),
    Column("chart_method",String,ForeignKey("chart_methods.method_name"),nullable=False),
    Column("settings",String,nullable=False),
    ForeignKeyConstraint(["project_name","user_account"],["projects.project_name","projects.user_account"])
    #若對應composite primary key 則要用composite foreign key , 必須用ForeignKeyConstraint才能建立複合外鍵
)

from sqlalchemy.sql.sqltypes import Integer,String,Date
from sqlalchemy import Table,Column,ForeignKey
from init import meta


source_methods = Table(
    "source_methods",
    meta,
    Column("method_name", String, primary_key=True),
    Column("permit_level",String,ForeignKey("user_levels.level"),nullable=False),
    Column("manual",String),
)


op_methods = Table(
    "op_methods",
    meta,
    Column("method_name", String, primary_key=True),
    Column("permit_level",String,ForeignKey("user_levels.level"),nullable=False),
    Column("manual",String),
)


chart_methods = Table(
    "chart_methods",
    meta,
    Column("method_name", String, primary_key=True),
    Column("permit_level",String,ForeignKey("user_levels.level"),nullable=False),
    Column("manual",String),
)
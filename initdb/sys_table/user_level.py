from sqlalchemy.sql.sqltypes import Integer,String
from sqlalchemy import Table,Column
from init import meta


user_levels = Table(
    "user_levels",
    meta,
    Column("level", Integer, primary_key=True),
    Column("level_name",String, nullable=False),
)
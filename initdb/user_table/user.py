from sqlalchemy.sql.sqltypes import Integer,String,Date
from sqlalchemy import Table,Column
from init import meta

users = Table(
    "users",
    meta,
    Column("user_account",String(16), primary_key=True),
    Column("user_name",String(16),nullable=False),
    Column("passwd",String,nullable=False),
    Column("email", String(60),nullable=False),
    Column("birthday",Date,nullable=False),
    Column("lastlogin",Date,nullable=False),
    Column("level",Integer,nullable=False),
    Column("level_persist",Integer,nullable=False),

)

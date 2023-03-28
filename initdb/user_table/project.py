from sqlalchemy.sql.sqltypes import Integer,String,Date
from sqlalchemy import Table,Column,Index
from sqlalchemy import PrimaryKeyConstraint,ForeignKey
from init import meta


projects = Table(
    "projects",
    meta,
    Column("project_name",String(16), primary_key=True),
    Column("user_account",String(16),ForeignKey("users.user_account"),primary_key=True),
    Column("create_date", Date,nullable=False),
    Column("last_modify", Date,nullable=False),
    # Index("user","user_name")
    #或者用PrimaryKeyConstraint('project_name', 'user_name')
)


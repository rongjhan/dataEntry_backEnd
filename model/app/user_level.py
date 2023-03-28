from ..base import Base
from sqlalchemy.types import String,Date,Integer
from sqlalchemy.schema import Column,ForeignKey



class UserLevel(Base):
    __tablename__= "user_levels"

    level = Column("level", Integer, primary_key=True)
    level_name = Column("level_name",String, nullable=False)


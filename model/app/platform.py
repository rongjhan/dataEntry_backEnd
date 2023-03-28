from ..base import Base
from sqlalchemy.types import String,Date,Integer
from sqlalchemy.schema import Column,ForeignKey



class Platform(Base):
    __tablename__= "platform"
    name = Column("name", String, primary_key=True)
    permit_level = Column(
        "permit_level",
        Integer,
        ForeignKey("user_levels.level",onupdate="CASCADE"),
        nullable=False
    )
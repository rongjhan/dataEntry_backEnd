from ..base import Base
from sqlalchemy.types import String,Date,Integer
from sqlalchemy.schema import Column,ForeignKey



class SoureOption(Base):
    __tablename__= "source_options"

    option_name = Column("option_name", String, primary_key=True)
    permit_level = Column(
        "permit_level",
        Integer,
        ForeignKey("user_levels.level",onupdate="CASCADE"),
        nullable=False
    )
    platform_support= Column("platform_support",String,nullable=False)


class TransformOption(Base):
    __tablename__= "transform_options"

    option_name = Column("option_name", String, primary_key=True)
    permit_level = Column(
        "permit_level",
        Integer,
        ForeignKey("user_levels.level",onupdate="CASCADE"),
        nullable=False
    )
    platform_support= Column("platform_support",String,nullable=False)


class VizOption(Base):
    __tablename__= "visual_options"

    option_name = Column("option_name", String, primary_key=True)
    permit_level = Column(
        "permit_level",
        Integer,
        ForeignKey("user_levels.level",onupdate="CASCADE"),
        nullable=False
    )
    platform_support= Column("platform_support",String,nullable=False)


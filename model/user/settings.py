from ..base import Base
from sqlalchemy.types import String,Date,Integer,BigInteger
from sqlalchemy.schema import Column,ForeignKey
from sqlalchemy.schema import CheckConstraint,ForeignKeyConstraint,UniqueConstraint
from sqlalchemy.orm import relationship
from sqlalchemy import event,DDL


class SourceConfig(Base):
    __tablename__= "source_configs"

    __table_args__= (
        ForeignKeyConstraint(
            ["project_name","user_account"],
            ["projects.project_name","projects.user_account"],
            ondelete="CASCADE",
            onupdate="CASCADE"
        ),
        UniqueConstraint("user_account","project_name","config_name")
        #若對應composite primary key 則要用composite foreign key , 
        #必須用ForeignKeyConstraint才能建立複合外鍵
    )

    id = Column("id",Integer,primary_key=True,autoincrement=True)
    config_name = Column("config_name", String(16))
    project_name = Column("project_name",String(16))
    user_account = Column("user_account",String(16))
    option = Column(
        "option",
        String,
        ForeignKey("source_options.option_name",onupdate="CASCADE", ondelete="CASCADE"),
        nullable=False
    )
    settings = Column("settings",String,nullable=True)




class TransformConfig(Base):
    __tablename__= "transform_configs"

    __table_args__= (
        ForeignKeyConstraint(
            ["project_name","user_account"],
            ["projects.project_name","projects.user_account"],
            ondelete="CASCADE",
            onupdate="CASCADE"
        ),
        UniqueConstraint("user_account","project_name","config_name")
        #若對應composite primary key 則要用composite foreign key , 
        #必須用ForeignKeyConstraint才能建立複合外鍵
    )
    id = Column("id",Integer,primary_key=True,autoincrement=True)
    config_name = Column("config_name", String(16))
    project_name = Column("project_name",String(16))
    user_account = Column("user_account",String(16))

    dependencies = relationship("TransformConfigDeps",back_populates="config")
    
    option = Column(
        "option",
        String,
        ForeignKey("transform_options.option_name",onupdate="CASCADE", ondelete="CASCADE"),
        nullable=False
    )
    settings = Column("settings",String,nullable=True)


class TransformConfigDeps(Base):
    __tablename__= "transform_config_deps"

    serial = Column("serial",Integer,primary_key=True,autoincrement=True)
    config_id = Column("config_id", Integer,ForeignKey("transform_configs.id",ondelete="CASCADE"),nullable=False)
    source_dep_id= Column("source_dep_id",String(16),ForeignKey("source_configs.id",ondelete="CASCADE"),nullable=False)
    
    config = relationship("TransformConfig",back_populates="dependencies",foreign_keys="TransformConfigDeps.config_id")
    source_dep = relationship("SourceConfig",foreign_keys="TransformConfigDeps.source_dep_id")


class VizConfig(Base):
    __tablename__= "visual_configs"

    __table_args__= (
        ForeignKeyConstraint(
            ["project_name","user_account"],
            ["projects.project_name","projects.user_account"],
            onupdate="CASCADE",
            ondelete="CASCADE"
        ),
        UniqueConstraint("user_account","project_name","config_name")
        #若對應composite primary key則要用composite foreign key , 
        #必須用ForeignKeyConstraint才能建立複合外鍵
    )

    id = Column("id",Integer,primary_key=True,autoincrement=True)
    config_name = Column("config_name", String(16))
    project_name = Column("project_name",String(16))
    user_account = Column("user_account",String(16))
    option = Column(
        "option",
        String,
        ForeignKey("visual_options.option_name",onupdate="CASCADE", ondelete="CASCADE"),
        nullable=False
    )

    dependencies = relationship("VizConfigDeps",back_populates="config")
    settings = Column("settings",String,nullable=True)



class VizConfigDeps(Base):
    __tablename__= "viz_config_deps"
    __table_args__= (
        CheckConstraint("(source_dep_id is NULL) <> (transform_dep_id is NULL)", name="check_one_deps"),
    )
    serial = Column("serial",Integer,primary_key=True,autoincrement=True)
    config_id = Column("config_id", Integer,ForeignKey("visual_configs.id",ondelete="CASCADE"),nullable=False)
    source_dep_id= Column("source_dep_id",Integer,ForeignKey("source_configs.id",ondelete="CASCADE"))
    transform_dep_id= Column("transform_dep_id",Integer,ForeignKey("transform_configs.id",ondelete="CASCADE"))

    config = relationship("VizConfig",back_populates="dependencies")
    source_dep = relationship("SourceConfig",foreign_keys="VizConfigDeps.source_dep_id")
    transform_dep = relationship("TransformConfig",foreign_keys="VizConfigDeps.transform_dep_id")


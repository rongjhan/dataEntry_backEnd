from ..base import Base
from sqlalchemy.types import String,Date
from sqlalchemy.schema import Column,ForeignKey



class Project(Base):
    __tablename__= "projects"

    project_name = Column("project_name",String(16), primary_key=True)
    user_account = Column(
        "user_account",
        String(16),
        ForeignKey("users.user_account",onupdate="CASCADE", ondelete="CASCADE"),
        primary_key=True
    )
    create_date = Column("create_date", Date,nullable=False)
    last_modify = Column("last_modify", Date,nullable=False)

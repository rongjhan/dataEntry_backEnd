from ..base import Base
from sqlalchemy.types import Integer,String,Date
from sqlalchemy.schema import Column,ForeignKey
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash





class User(Base,UserMixin):
    __tablename__= "users"

    user_account = Column("user_account",String(16), primary_key=True)
    user_name = Column("user_name",String(20),nullable=False)
    passwd_hash = Column("passwd_hash",String,nullable=False)
    email = Column("email", String(60),nullable=False)
    birthday = Column("birthday",Date,nullable=False)
    last_login = Column("last_login",Date,nullable=False)
    level = Column("level",Integer,ForeignKey("user_levels.level",onupdate="CASCADE"),nullable=False)
    level_deadline = Column("level_deadline",Date,nullable=False)

    def set_password(self, password):
        self.passwd_hash = generate_password_hash(password)

    def validate_password(self, password):
        return check_password_hash(self.passwd_hash, password)

    def get_id(self):
        try:
            return str(self.user_account)
        except AttributeError:
            raise NotImplementedError("No `user_account` attribute - `check user identifier`") from None



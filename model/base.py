from sqlalchemy.orm import declarative_base

def to_dict(self):
    return {c.name: getattr(self, c.name, None) for c in self.__table__.columns}


Base = declarative_base()
Base.to_dict = to_dict

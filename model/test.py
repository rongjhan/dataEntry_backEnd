from sqlalchemy.schema import DDL
from sqlalchemy import create_engine

engine = create_engine('sqlite:///e:\\dataEntryV4\\backend\\test.db')

trigger = DDL(
    '''
    CREATE TRIGGER foo_trigger BEFORE UPDATE
    ON users FOR EACH ROW
    BEGIN
        update projects SET project_name="1234567" where user_account="admin";
    END;
    '''
)
with engine.connect() as connection:
    result = connection.execute(trigger)
# event.listen(Project.__table__, "after_create", trigger)
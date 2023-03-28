from sqlalchemy import create_engine,MetaData,Index,Table
from sqlalchemy.schema import CreateTable,CreateIndex



if (__name__=='__main__'): #解決循環依賴問題
    from user_table.user import users,meta
    from user_table.project import projects
    from sys_table.user_level import user_levels
    from sys_table.functionality import source_methods,op_methods,chart_methods
    from user_table.settings import source_settings,op_settings,chart_settings

    engine = create_engine("sqlite:///app.sqlite")
    meta.create_all(engine)

    # print(meta.tables)
    # meta.create_all(engine)
    # print(CreateTable(users).compile(engine))
    # print(CreateTable(projects).compile(engine))
    # print(CreateIndex(Index("a",projects.c.user_name)).compile(engine))
    # print(CreateTable(sources).compile(engine))
else:
    meta = MetaData()


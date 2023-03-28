from app import create_app
from flask import url_for,make_response,jsonify
from pprint import pprint
from werkzeug.security import safe_join
from os import fspath
import typing as t
from model import db_session
from model.util import config_orm
from model import TransformOption 
from sqlalchemy.sql import select,delete,insert
import json
# print(tapp.url_map._rules)
# print(tapp.url_map._rules_by_endpoint.values())

tapp= create_app()
ctx = tapp.test_request_context()
ctx.push()


def check_response(url,query_String:dict): #query_string={"mode":"dashBoard","project":"123"}
    client = tapp.test_client()
    r = client.get(url,query_String)
    print(r.status, r.headers.get('location'),r.text)

def check_url_for(endpoint,**args):
    print(args)
    print(url_for(endpoint,**args))


# check_url_for("main.editorPage",filename="index.html")

orm = config_orm("visualize")

db_session.add_all(
    [TransformOption(option_name="python",permit_level=3,platform_support="web,office"),
    TransformOption(option_name="javascript",permit_level=2,platform_support="web,office")]
)



db_session.commit()

# print(configs.dependecies[0].source_dep.config_name)

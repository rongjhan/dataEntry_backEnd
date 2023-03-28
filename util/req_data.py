from flask import request
import typing as t


def data_from_req(field:t.Optional[str]=None)->t.Any:
    if request.method =="GET" :
        return request.args.get(field) if field else request.args
    
    if request.method  == "POST" and request.content_type=="x-www-form-urlencoded":
        return request.form.get(field) if field else request.form

    if request.method  == "POST" and request.content_type=="application/json":
        return request.json.get(field,None) if field else request.json
        
    # return None 無return則預設為return None
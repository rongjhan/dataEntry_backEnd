from flask import Blueprint,request,jsonify,render_template
from flask_login import login_required, current_user
import pandas as pd
import numpy as np
import json 

operate_bp = Blueprint('operate', __name__)


@operate_bp.route('/download',methods=['POST',"GET"])
@login_required
def download():
    if request.method == 'GET':
        if request.args.get('dataUri') is not None:
            data = "\""+request.args.get('dataUri')+"\""
            print(data)
            return render_template("download.j2",data=data) 
    if request.method == 'POST':
        #因為office addin限制 post方法暫時沒有用到,但保留將來使用
        data = "\""+request.form.get('dataUri')+"\""
        print(data)
        return render_template("download.j2",data=data)


@operate_bp.route('/operate',methods=['POST'])
@login_required
def operate():
    content = request.json # content is dict not json string
    if content is not None:
        datas = content["datas"]
        code = content["code"]
        exec(code)
        return jsonify(locals()["result"].values.tolist())
    else:
        return "format error"
    # locals()["data1"].to_csv(f'D:\\crawl\\crawlcompany\\data1.csv', encoding='utf-8-sig',errors="ignore")``
    # locals()["data2"].to_csv(f'D:\\crawl\\crawlcompany\\data2.csv', encoding='utf-8-sig',errors="ignore")
    # locals()["result"].to_csv(f'D:\\crawl\\crawlcompany\\result.csv', encoding='utf-8-sig',errors="ignore")
    
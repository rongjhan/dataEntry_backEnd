from flask import Blueprint,request
import requests
import pandas as pd
import json 

request_bp = Blueprint('request', __name__,url_prefix="/request")


@request_bp.route('/stockApi')
def twse_thismonth():
    stockNo = request.args.get("stockNo")
    link = f"https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&stockNo={stockNo}"
    # https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&stockNo=2330
    headers = {
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.04103.116     Safari/537.36'}
    response = requests.get(link, headers=headers)
    resDict = response.json()
    resDict["data"].insert(0,resDict["fields"]) #此處fields即欄位名稱
    # pdData = pd.DataFrame(rDict["data"])
    jsonData = json.dumps(resDict["data"])
    # print(jsonData)
    return jsonData


@request_bp.route('/requestApi') #request for any random api
def requestapi():
    headers = {
        "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116     Safari/537.36'}
    url = request.args.get("url")
    response = requests.get(url, headers=headers)
    resDict = response.json()
    resDict["data"].insert(0,resDict["fields"]) #此處fields即欄位名稱
    # pdData = pd.DataFrame(rDict["data"])
    jsonData = json.dumps(resDict["data"])
    # print(response.json(),type(response.json()))
    # print(jsonData)
    return jsonData
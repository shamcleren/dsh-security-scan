import requests
from flask import Flask, request
app = Flask(__name__)
def load(url):
    return requests.get(url, timeout=5).text
@app.get("/preview")
def preview():
    return load(request.args["url"])

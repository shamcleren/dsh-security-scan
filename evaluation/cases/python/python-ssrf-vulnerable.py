import requests
from flask import Flask, request
app = Flask(__name__)
@app.post("/preview")
def preview():
    return requests.get(request.json["url"], timeout=5).text

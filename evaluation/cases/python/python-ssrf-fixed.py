import requests
from flask import Flask, request
app = Flask(__name__)
FEEDS = {"news": "https://feeds.example.com/news.xml", "blog": "https://feeds.example.com/blog.xml"}
@app.get("/feed")
def feed():
    return requests.get(FEEDS[request.args["name"]], timeout=5).text

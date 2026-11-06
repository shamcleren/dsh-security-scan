import os
from flask import Flask, request
app = Flask(__name__)
UPLOADS = "/srv/uploads"
@app.get("/files")
def download():
    with open(os.path.join(UPLOADS, request.args["name"]), "rb") as handle:
        return handle.read()

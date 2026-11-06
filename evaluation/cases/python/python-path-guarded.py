import os
from flask import Flask, abort, request, send_file
app = Flask(__name__)
BASE = "/srv/uploads"
@app.get("/files")
def download():
    full = os.path.realpath(os.path.join(BASE, request.args["name"]))
    if not full.startswith(BASE + os.sep):
        abort(400)
    return send_file(full)

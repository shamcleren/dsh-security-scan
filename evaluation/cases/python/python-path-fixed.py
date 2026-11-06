import os
from flask import Flask, request, send_file
from werkzeug.utils import secure_filename
app = Flask(__name__)
UPLOADS = "/srv/uploads"
@app.get("/files")
def download():
    return send_file(os.path.join(UPLOADS, secure_filename(request.args["name"])))

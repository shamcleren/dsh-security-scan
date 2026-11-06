from flask import Flask, request, redirect
app = Flask(__name__)
@app.get("/login/done")
def done():
    return redirect(request.args.get("next", "/"))

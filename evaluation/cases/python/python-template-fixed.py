from flask import Flask, request, render_template_string
app = Flask(__name__)
GREETING = "<p>Hello {{ name }}</p>"
@app.get("/greet")
def greet():
    return render_template_string(GREETING, name=request.args.get("name", ""))

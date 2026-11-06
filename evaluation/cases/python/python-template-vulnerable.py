from flask import Flask, request, render_template_string
app = Flask(__name__)
@app.get("/greet")
def greet():
    return render_template_string("<p>Hello " + request.args.get("name", "") + "</p>")

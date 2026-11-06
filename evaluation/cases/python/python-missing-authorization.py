from flask import Flask
app = Flask(__name__)
@app.get("/accounts/<account_id>")
def account(account_id):
    return db.accounts.find_one({"id": account_id})

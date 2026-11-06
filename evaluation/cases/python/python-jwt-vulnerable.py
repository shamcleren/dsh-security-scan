import jwt
def current_user(token):
    return jwt.decode(token, options={"verify_signature": False})["sub"]

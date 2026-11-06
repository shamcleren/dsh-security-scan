import jwt
def current_user(token, key):
    return jwt.decode(token, key, algorithms=["HS256"])["sub"]

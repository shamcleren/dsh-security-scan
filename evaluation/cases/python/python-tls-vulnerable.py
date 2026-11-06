import requests
def retrieve():
    return requests.get("https://service.invalid", verify=False)

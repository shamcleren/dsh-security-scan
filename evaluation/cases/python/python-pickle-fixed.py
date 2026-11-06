import json
def handle(request):
    return json.loads(request.body)

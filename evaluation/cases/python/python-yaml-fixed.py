import yaml
def handle(request):
    return yaml.safe_load(request.body)

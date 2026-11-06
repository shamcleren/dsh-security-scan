import yaml
def handle(request):
    return yaml.unsafe_load(request.body)

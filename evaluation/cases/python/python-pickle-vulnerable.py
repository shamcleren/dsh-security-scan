import pickle
def handle(request):
    return pickle.loads(request.body)

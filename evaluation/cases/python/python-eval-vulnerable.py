def handle(request):
    return eval(request.args["expression"])

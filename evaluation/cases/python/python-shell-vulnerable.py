import subprocess
def handle(request):
    subprocess.run(request.args["command"], shell=True)

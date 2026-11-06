import subprocess
def handle(request):
    subprocess.run(["echo", request.args["message"]], shell=False)

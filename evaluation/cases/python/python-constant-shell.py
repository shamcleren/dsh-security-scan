import subprocess
STATUS_COMMAND = "git status --short"
def status():
    return subprocess.run(STATUS_COMMAND, shell=True, capture_output=True, text=True).stdout

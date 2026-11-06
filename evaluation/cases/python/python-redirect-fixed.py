from django.shortcuts import redirect
from django.utils.http import url_has_allowed_host_and_scheme
def done(request):
    target = request.GET.get("next", "/")
    if url_has_allowed_host_and_scheme(target, allowed_hosts={request.get_host()}):
        return redirect(target)
    return redirect("/")

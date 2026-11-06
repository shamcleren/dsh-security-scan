from django.http import HttpResponse
from django.utils.safestring import mark_safe
def profile(request):
    return HttpResponse(mark_safe("<h1>" + request.GET["nickname"] + "</h1>"))

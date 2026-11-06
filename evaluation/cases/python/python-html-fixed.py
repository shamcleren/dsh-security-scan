from django.http import HttpResponse
from django.utils.html import format_html
def profile(request):
    return HttpResponse(format_html("<h1>{}</h1>", request.GET["nickname"]))

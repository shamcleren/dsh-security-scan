from .models import Order
def search(request):
    return list(Order.objects.raw("SELECT * FROM orders WHERE customer = %s", [request.GET["customer"]]))

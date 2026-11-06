from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import Invoice
@login_required
def invoice(request, pk):
    item = Invoice.objects.get(pk=pk)
    return JsonResponse({"id": item.pk, "total": str(item.total), "owner": item.owner_id})

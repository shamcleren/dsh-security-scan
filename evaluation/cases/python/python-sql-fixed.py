from django.db import connection
def search(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT id FROM orders WHERE customer = %s", [request.GET["customer"]])
        return cursor.fetchall()

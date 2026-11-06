from django.db import connection
def search(request):
    with connection.cursor() as cursor:
        cursor.execute(f"SELECT id FROM orders WHERE customer = '{request.GET['customer']}'")
        return cursor.fetchall()

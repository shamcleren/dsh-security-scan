package sample
import ("encoding/json"; "net/http")
func invoice(w http.ResponseWriter, r *http.Request) {
	item, _ := invoices.Find(r.PathValue("id"))
	json.NewEncoder(w).Encode(item)
}

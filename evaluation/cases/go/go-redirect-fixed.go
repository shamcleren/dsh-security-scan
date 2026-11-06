package sample
import "net/http"
var allowedDestinations = map[string]string{"orders": "/orders", "profile": "/profile"}
func done(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, allowedDestinations[r.URL.Query().Get("next")], http.StatusFound)
}

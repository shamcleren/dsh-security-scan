package sample
import ("io"; "net/http"; "net/url")
func item(w http.ResponseWriter, r *http.Request) {
	response, err := http.Get("https://api.example.com/items/" + url.PathEscape(r.FormValue("id")))
	if err != nil { return }
	defer response.Body.Close()
	io.Copy(w, response.Body)
}

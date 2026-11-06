package sample
import ("io"; "net/http")
func preview(w http.ResponseWriter, r *http.Request) {
	response, err := http.Get(r.FormValue("url"))
	if err != nil { return }
	defer response.Body.Close()
	io.Copy(w, response.Body)
}

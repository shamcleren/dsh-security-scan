package sample
import ("net/http"; "os"; "path/filepath")
func download(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("path")
	if !filepath.IsLocal(name) {
		http.Error(w, "invalid path", http.StatusBadRequest)
		return
	}
	data, _ := os.ReadFile(filepath.Join("/srv/private", name))
	w.Write(data)
}

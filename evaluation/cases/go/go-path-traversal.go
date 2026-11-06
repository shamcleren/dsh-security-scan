package sample
import ("net/http"; "os"; "path/filepath")
func register() { http.HandleFunc("/download", func(w http.ResponseWriter, r *http.Request) { data, _ := os.ReadFile(filepath.Join("/srv/private", r.URL.Query().Get("path"))); w.Write(data) }) }

package sample
import ("net/http"; "os/exec")
func handle(r *http.Request) { exec.Command("sh", "-c", r.URL.Query().Get("command")).Run() }

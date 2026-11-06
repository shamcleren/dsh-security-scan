package sample
import ("net/http"; "os/exec")
func handle(r *http.Request) { exec.Command("echo", r.URL.Query().Get("message")).Run() }

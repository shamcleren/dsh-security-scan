package sample
import "os/exec"
func fixed() { exec.Command("sh", "-c", "printf safe").Run() }

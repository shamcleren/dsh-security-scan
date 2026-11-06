package sample
import ("html/template"; "net/http")
var page = template.Must(template.New("p").Parse("<div>{{.}}</div>"))
func bio(w http.ResponseWriter, r *http.Request) { page.Execute(w, template.HTML(r.FormValue("bio"))) }

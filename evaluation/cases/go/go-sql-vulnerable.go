package sample
import ("database/sql"; "fmt"; "net/http")
func handle(db *sql.DB, r *http.Request) { db.Query(fmt.Sprintf("SELECT * FROM users WHERE name = '%s'", r.URL.Query().Get("name"))) }

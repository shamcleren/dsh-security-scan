package sample
import ("database/sql"; "net/http")
func handle(db *sql.DB, r *http.Request) { db.Query("SELECT * FROM users WHERE name = ?", r.URL.Query().Get("name")) }

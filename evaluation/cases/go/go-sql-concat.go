package sample
import ("database/sql"; "net/http")
func find(db *sql.DB, r *http.Request) { db.QueryRow("SELECT id FROM users WHERE email = '" + r.FormValue("email") + "'") }

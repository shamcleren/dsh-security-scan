package sample
import ("database/sql"; "net/http")
const usersTable = "users"
func find(db *sql.DB, r *http.Request) { db.QueryRow("SELECT id FROM " + usersTable + " WHERE email = ?", r.FormValue("email")) }

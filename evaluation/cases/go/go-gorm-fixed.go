package sample
import ("net/http"; "gorm.io/gorm")
type User struct{ ID uint; Email string }
func find(db *gorm.DB, r *http.Request) { var user User; db.Where("email = ?", r.FormValue("email")).First(&user) }

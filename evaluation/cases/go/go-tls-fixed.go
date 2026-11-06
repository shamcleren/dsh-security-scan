package sample
import "crypto/tls"
func config() *tls.Config { return &tls.Config{InsecureSkipVerify: false} }

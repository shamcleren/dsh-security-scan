package sample
import ("path/filepath"; "github.com/gin-gonic/gin")
func register(router *gin.Engine) {
	router.GET("/files", func(c *gin.Context) { c.File(filepath.Join("uploads", c.Query("name"))) })
}

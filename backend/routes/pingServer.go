package routes

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func PingServer(ctx *gin.Context) {
	ctx.JSON(http.StatusOK, gin.H{
		"message": "OK",
	})
}

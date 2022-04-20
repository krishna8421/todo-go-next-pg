package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/krishna8421/todo-go-next-pg/backend/database"
	"github.com/krishna8421/todo-go-next-pg/backend/models"
)

func GetTodo(ctx *gin.Context) {
	var todos []models.Todo
	database.PG.Find(&todos)

	ctx.JSON(200, gin.H{
		"status": "success",
		"todos":   todos,
		"total":  len(todos),
	})
}

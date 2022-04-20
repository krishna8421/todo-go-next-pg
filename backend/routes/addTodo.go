package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/krishna8421/todo-go-next-pg/backend/database"
	"github.com/krishna8421/todo-go-next-pg/backend/models"
	"net/http"
)

func AddTodo(ctx *gin.Context) {
	var newTodo models.Todo
	err := ctx.BindJSON(&newTodo)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}
	todo := models.Todo{ID: newTodo.ID, Title: newTodo.Title}

	result := database.PG.Create(&todo)
	if result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": result.Error.Error(),
		})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{
		"status": "success",
	})
}

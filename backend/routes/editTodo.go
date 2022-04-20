package routes

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/krishna8421/todo-go-next-pg/backend/database"
	"github.com/krishna8421/todo-go-next-pg/backend/models"
)

func EditTodo(ctx *gin.Context) {
	var editedTodo models.Todo
	err := ctx.BindJSON(&editedTodo)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	if database.PG.Model(&editedTodo).
		Updates(models.Todo{
			Title: editedTodo.Title,
			ID:    editedTodo.ID,
		}).RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{
			"error": "Todo not found",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "success",
	})
}

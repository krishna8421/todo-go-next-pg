package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/krishna8421/todo-go-next-pg/backend/database"
	"github.com/krishna8421/todo-go-next-pg/backend/models"
	"net/http"
)

func DeleteTodo(ctx *gin.Context) {
	var toDelete models.DeleteTodo
	err := ctx.BindJSON(&toDelete)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
		return
	}

	if database.PG.Where("id = ?", toDelete.ID).
		Delete(&models.Todo{}).
		RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{
			"error": "Todo not found",
		})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{
		"status": "success",
	})
}

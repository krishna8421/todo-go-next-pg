package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/krishna8421/todo-go-next-pg/backend/routes"
)

func main() {
	router := gin.Default()

	// Routes
	router.GET("/ping", routes.PingServer)
	router.POST("/add", routes.AddTodo)
	router.DELETE("/delete", routes.DeleteTodo)
	router.GET("/todos", routes.GetTodo)
	router.PATCH("/edit", routes.EditTodo)

	// Start the server at port 8080
	err := router.Run(":8080")
	if err != nil {
		fmt.Println(err)
		return
	}
}

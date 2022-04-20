package main

import (
	"log"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/krishna8421/todo-go-next-pg/backend/database"
	"github.com/krishna8421/todo-go-next-pg/backend/routes"
)

func main() {

	router := gin.Default()
	database.IntiDB()
	router.Use(cors.Default())

	router.GET("/ping", routes.PingServer)
	router.POST("/add", routes.AddTodo)
	router.DELETE("/delete", routes.DeleteTodo)
	router.GET("/todos", routes.GetTodo)
	router.PATCH("/edit", routes.EditTodo)
	err := router.Run(":8000")
	if err != nil {
		log.Fatal(err)
		return
	}
}

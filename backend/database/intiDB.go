package database

import (
	"fmt"
	"github.com/krishna8421/todo-go-next-pg/backend/models"
	"github.com/krishna8421/todo-go-next-pg/backend/utils"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

func init() {
	utils.LoadEnv()
}

var PG *gorm.DB

func IntiDB() {
	log.Println("Connecting to database...")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	dbPort := os.Getenv("DB_PORT")
	dsn := fmt.Sprintf("host=localhost user=%s password=%s dbname=%s port=%s sslmode=disable", dbUser, dbPassword, dbName, dbPort)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting to Database ❌: \n", err)
		return
	}
	PG = db
	err = PG.AutoMigrate(&models.Todo{})
	if err != nil {
		log.Fatal("AutoMigrate failed ❌: \n", err)
		return
	}
	log.Println("Database Connected ✅")
}

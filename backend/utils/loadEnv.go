package utils

import (
	"github.com/joho/godotenv"
	"log"
)

func LoadEnv() {
	log.Println("Loading env variables...")
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file ❌: \n", err)
		return
	}
	log.Println("Env variables loaded ✅")
}

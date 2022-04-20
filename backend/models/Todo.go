package models

type Todo struct {
	ID    string `gorm:"primaryKey;unique_index" json:"id"`
	Title string `json:"title"`
}

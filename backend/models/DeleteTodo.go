package models

type DeleteTodo struct {
	ID string `gorm:"primaryKey;unique_index" json:"id"`
}

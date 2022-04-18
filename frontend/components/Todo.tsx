import React from 'react'
import Options from './Options'
import type { ITodo } from "../interface/todo";

interface Props{
    todo: ITodo
}

export default function Todo({todo}: Props) {
  return (
    <div className="h-12 w-full flex justify-around items-center rounded gap-2 p-2">
        <input 
            readOnly
            type="text" 
            value={todo.title}
            className="outline-none w-full h-full bg-gray-50 "
        />
        <Options id={todo.id} />
    </div>
  )
}
import { useState, useRef, useEffect } from 'react'
import Options from './Options'
import type { ITodo } from "../interface/todo";
import { useRoot } from '../hooks/useRoot';
import { BsCheck } from 'react-icons/bs';

interface Props{
    todo: ITodo
}

export default function Todo({todo}: Props) {
  const { editTodo } = useRoot()
  const [readOnly, setReadOnly] = useState(true)
  const [editedTodo, setEditedTodo] = useState("")
  const inputElement = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    inputElement?.current?.focus();
  };


useEffect(()=>{
  setEditedTodo(todo.title)
},[todo.title])
  

  return (
    <div className={`${readOnly ? null: "!bg-gray-200"} h-12 w-full flex justify-around items-center rounded gap-2 p-2 `}>
        <input 
            readOnly={readOnly}
            type="text" 
            value={editedTodo}
            onChange={(e)=>setEditedTodo(e.target.value)}
            className={`${readOnly ? null: "!bg-gray-200"} outline-none w-full h-full bg-gray-50`}
            ref={inputElement} 
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    editTodo(todo.id, editedTodo)
                    setReadOnly(true)
                }
            }}
        />
        {
          readOnly ? (
            <Options id={todo.id} setReadOnly={setReadOnly} focusInput={focusInput} />
          ) : (
            <div
              className="cursor-pointer outline-none rounded-lg bg-slate-100/80 text-slate-800 p-1 transition-all duration-300 hover:bg-green-400 hover:text-white"
              onClick={() => {
                editTodo(todo.id, editedTodo)
                setReadOnly(true)
              }}
            >
              <BsCheck size={16} />
            </div>
          )
        }
    </div>
  )
}
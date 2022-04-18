import type { ITodo } from "../interface/todo";
import { useState, createContext, useEffect, ReactNode } from "react";
import { uid } from "uid";
// import axios from "axios";


interface IRootContext { 
    newTodo: string
    setNewTodo: (newTodo:string) => void
    todoArr: [ITodo] | []
    setTodoArr: (todoArr:string) => void
    addTodo: () => void
}

export const RootContext = createContext<IRootContext>({
    newTodo: "",
    setNewTodo: () => {},
    todoArr: [],
    setTodoArr: () => {},
    addTodo: () => {}
});

export const RootProvider = ({ children }: {children: ReactNode}) => {
    const [newTodo, setNewTodo] = useState<string>("");
    const [todoArr, setTodoArr] = useState<any>([])
    const [reFetch, setReFetch] = useState<boolean>(false)
    const URL = "http://localhost:8000/";

    const getTodo = () => {

    }

    const addTodo = () => {
        if(newTodo.length > 0){
            setTodoArr([...todoArr, {
                id: uid(16),
                title: newTodo,
            }])
            setNewTodo("")
        }
        setReFetch(!reFetch)
    }

    const deleteTodo = (id: string) => {
        setReFetch(!reFetch)
    }

    const editTodo = (id: string) => {
        setReFetch(!reFetch)
    }

    useEffect(()=>{
        
    },[reFetch])
    return (
        <RootContext.Provider
          value={{newTodo, setNewTodo,todoArr, setTodoArr,addTodo}}
        >
          {children}
        </RootContext.Provider>
      );
}

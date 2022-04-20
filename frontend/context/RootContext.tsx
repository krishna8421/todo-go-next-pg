import type { ITodo } from "../interface/todo";
import { useState, createContext, useEffect, ReactNode } from "react";
import { uid } from "uid";
import axios from "axios";


interface IRootContext { 
    newTodo: string
    setNewTodo: (newTodo:string) => void
    todoArr: [ITodo] | []
    setTodoArr: (todoArr:string) => void
    addTodo: () => void
    deleteTodo: (id:string) => void
    editTodo: (id: string, newTodo: string) => void
}

export const RootContext = createContext<IRootContext>({
    newTodo: "",
    setNewTodo: () => {},
    todoArr: [],
    setTodoArr: () => {},
    addTodo: () => {},
    deleteTodo: () => {},
    editTodo: () => {}
});

export const RootProvider = ({ children }: {children: ReactNode}) => {
    const [newTodo, setNewTodo] = useState<string>("");
    const [todoArr, setTodoArr] = useState<any>([])
    const [reFetch, setReFetch] = useState<boolean>(false)
    const URL = "http://localhost:8000";

    const getTodo = async () => {
        const res = await axios.get(`${URL}/todos`)
        setTodoArr(res.data.todos.reverse())
    }
    
    const addTodo = async () => {
        if(newTodo.length > 0){
            try{
                const res = await axios.post(`${URL}/add`, {
                    id: uid(16),
                    title: newTodo,
                })
                console.log(res.data);
            }catch(err:any){
                console.log(err.message);
            }
        setNewTodo("")
        setReFetch(!reFetch)
    }}

    const deleteTodo = async (id: string) => {
        try {
            const res = await axios.delete(`${URL}/delete`, {
                data: {
                    id
                }
            })
            console.log(res.data);
        } catch (err:any) {
            console.log(err.message);
        }
        setReFetch(!reFetch)
    }

    const editTodo = async (id: string, newTodo: string) => {       
        try {
            const res = await axios.patch(`${URL}/edit`, {
                id: id,
                title: newTodo
            })
            console.log(res.data);
        } catch (err:any) {
            console.log(err.message);
        }
        setReFetch(!reFetch)
    }

    useEffect(()=>{
        getTodo()
    },[reFetch])
    return (
        <RootContext.Provider
          value={{newTodo, setNewTodo,todoArr, setTodoArr, addTodo, deleteTodo, editTodo}}
        >
          {children}
        </RootContext.Provider>
      );
}

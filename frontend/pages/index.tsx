import type { NextPage } from "next";
import type { ITodo } from "../interface/todo";
import { MdOutlineAdd } from "react-icons/md";
import Todo from "../components/Todo";
import { useState } from "react";
import {uid} from "uid";
import {useRoot} from "../hooks/useRoot"

const Home: NextPage = () => {
  const {newTodo, setNewTodo,todoArr,addTodo} = useRoot()
  return (
    <div className="flex min-h-screen justify-center overflow-hidden bg-gray-100 py-20 font-SpecialElite">
      <div className="mx-4 flex h-[40rem] w-[30rem] flex-col items-center gap-4 rounded-lg bg-white drop-shadow-xl">
        <h1 className="mt-6 text-3xl">Todo</h1>
        <div className="relative w-5/6">
          <input
          onKeyPress={
            (e)=>{
                if(e.code==="Enter"){
                  addTodo()
                }
            }
          }
            className="w-full rounded-lg border-2 border-violet-200 p-2 pr-10 outline-violet-500"
            type="text"
            placeholder="Add a todo"
            value={newTodo}
            onChange={(e)=>setNewTodo(e.target.value)}
          />
          <div 
            className="absolute right-2 top-2 cursor-pointer rounded-lg bg-violet-500/80 text-violet-800 p-1 transition-all duration-300 hover:bg-violet-500"
            onClick={addTodo}
          >
            <MdOutlineAdd size={20} />
          </div>
        </div>
        <div className="overflow-scroll mt-4 flex h-[28rem] w-5/6 flex-col items-center gap-2 rounded-md bg-gray-50 p-2">
          {todoArr.map((todo: ITodo, i:number)=> <Todo todo={todo} key={i} /> )}
        </div>
      </div>
    </div>
  );
};

export default Home;

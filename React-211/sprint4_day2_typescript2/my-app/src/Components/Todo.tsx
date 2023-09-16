import React, { useEffect, useState } from 'react'
import Header from './Header';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios,{AxiosResponse} from "axios"

export interface TodoItems{
    id:number;
    title:string;
    status:boolean;
}

const Todo = () => {
    const [todos,setTodos]= useState<TodoItems[]>([]);

    const addTodoHandler=(title:string)=>{
            if(title){
                const payload ={
                    id:todos.length+1,
                    title,
                    status:false

                }
                // setTodos([...todos,payload])
                axios.post("http://localhost:8080/todos",payload).then(getTodos)
            }
    }


const getTodos=()=>{
    axios.get("http://localhost:8080/todos")
    // .then({data}:{data:TodoItem[]})=>{
    //     setTodos(data)
    // }
    .then((response: AxiosResponse<TodoItems[]>)=>{
        setTodos(response.data)
    })
}


useEffect(()=>{
    getTodos()
},[])

  return (
    <div>
        <Header label='Todos' />
        <TodoInput addTodoHandler={addTodoHandler} />
        {
            todos.length > 0 &&
            todos.map((item)=>{
                    return <TodoItem key ={item.id} {...item} />
            })
        }
    </div>
  )
}

export default Todo
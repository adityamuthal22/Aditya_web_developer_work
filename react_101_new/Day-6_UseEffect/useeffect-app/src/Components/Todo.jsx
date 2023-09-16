import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [data,setData]=useState([]);
// https://jsonplaceholder.typicode.com/posts
    const getTodos=async()=>{
        try{
            let data=await fetch(`https://jsonplaceholder.typicode.com/todos`)
            data=await data.json();
            // console.log(data)
            setData(data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getTodos()
    },[])
   return (
    <div>
        <h1>Todos</h1>
        <div style={{margin:"auto"}}>
            {
                data.map(todo=>
                    <div key={todo.id} style={{display:"flex" ,gap:"10px"}}>
                        <div>{todo.id}</div>
                      <div> {todo.title}</div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Todo
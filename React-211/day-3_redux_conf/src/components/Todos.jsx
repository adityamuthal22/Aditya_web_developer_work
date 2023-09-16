import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector,shallowEqual } from 'react-redux'
import TodoInput from './TodoInput'
import axios from "axios"
import { AddTodoFailure, AddTodoRequest, AddTodoSuccess, todosFailure, todosRequest, todosSuccess } from '../Redux/AppReducer/action';

const Todos = () => {
    const dispatch =useDispatch();
    const {todos,isLoading,IsError} =useSelector((store)=>{
        return{
            todos:store.AppReducer.todos,
            isLoading:store.AppReducer.isLoading,
            IsError:store.AppReducer.IsError,
        }
    },shallowEqual);
    console.log("I am rendering")
   

    const getTodos =()=>{
        dispatch(todosRequest())
        return axios.get(" http://localhost:8080/todos")
        .then((r)=>{
            dispatch((todosSuccess(r.data)))
        })
        .catch((e)=>{
            dispatch(todosFailure());
        })
    }

    const addTodos=(payload)=>{
        dispatch(AddTodoRequest())
        return axios.post("http://localhost:8080/todos",payload)
        .then((r) =>{
            dispatch(AddTodoSuccess())
        })
        .catch((e) =>{
            console.log(e)
            dispatch(AddTodoFailure())
        })
    }

    const handleAddTodo=(payload)=>{
        addTodos(payload).then(()=>getTodos());
    }

    useEffect(()=>{
        getTodos();
    },[])

  return (
    <div>
        <h1>Todos</h1>
        <TodoInput addTodos={handleAddTodo}/>
        {
            todos.length > 0 && 
            todos.map((item)=>{
                return <div key ={item.id}>{item.title}</div>
            })
        }
    </div>
  )
}

export default Todos
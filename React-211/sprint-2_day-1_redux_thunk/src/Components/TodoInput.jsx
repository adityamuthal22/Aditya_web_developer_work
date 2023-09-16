import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addTaskFailure, addTaskRequest, addTaskSuccess,getTasks } from '../Redux/action'

const TodoInput = () => {
    const dispatch=useDispatch()
    const [currentTask,setCurrentTask]= useState("")

    const addTask=()=>{
        if(currentTask){
            const payload={
                title:currentTask,
                status:false,
            }
            dispatch(addTaskRequest());
            axios.post("http://localhost:8080/tasks",payload)
            .then((r)=>{
                dispatch(addTaskSuccess(r.data))
            })
            .then(()=>dispatch(getTasks))
            .catch((e)=>{
                dispatch(addTaskFailure());
            })
        }
    }
  return (
    <div>
        <input
        value={currentTask}
        placeholder="Add Task"
        onChange={(e)=>setCurrentTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default TodoInput
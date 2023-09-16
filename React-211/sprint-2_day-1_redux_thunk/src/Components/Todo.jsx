import React, { useEffect } from 'react'
import { getTasks } from '../Redux/action';
import TodoInput from './TodoInput'
import { useDispatch,useSelector } from 'react-redux';


const Todo = () => {
    const dispatch =useDispatch();
    const taskData =useSelector((store)=>store.tasks)

   

    useEffect(()=>{
       dispatch(getTasks)
    },[])
  return (
    <div>
        <h3>Todos</h3>
        <TodoInput />
        {
            taskData?.length >0 &&
            taskData?.map((task)=>{
                return <div key={task.id}>{task.title}</div>
            })
        }
    </div>
  )
}

export default Todo
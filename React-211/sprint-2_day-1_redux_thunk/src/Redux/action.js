import * as types from "./actionTypes"
import axios from "axios"

const getTasksRequest =()=>{
    return {
        type:types.GET_TASKS_REQUEST,
    }
}

const getTasksSuccess =(payload)=>{
    return {
        type:types.GET_TASKS_SUCCESS,
        payload,
    }
}

const getTasksFailure =()=>{
    return {
        type:types.GET_TASKS_FAILURE,
    }
}

const addTaskRequest =()=>{
    return {
        type:types.ADD_TASKS_REQUEST,
    }
}

const addTaskSuccess =()=>{
    return {
        type:types.ADD_TASKS_SUCCESS,
     
    }
}

const addTaskFailure =()=>{
    return {
        type:types.ADD_TASKS_FAILURE,
    }
}

const getTasks=(dispatch)=>{
    dispatch(getTasksRequest());
    axios
    .get("http://localhost:8080/tasks")
    .then((r)=>{
        dispatch(getTasksSuccess(r.data))
    })
    .catch((e)=>{
        dispatch(getTasksFailure(e))
    })
}



export {getTasksFailure,getTasksRequest,getTasksSuccess,addTaskFailure,addTaskRequest,addTaskSuccess,getTasks}
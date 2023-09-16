import  { ADD_TODO,
     COMPLETE_TODO,
     INCREMENT_COUNTER,
     DECREMENT_COUNTER, 
     UPDATE_TODO,
     DELETE_TODO,
    } 
     from "./action.types";



export const counterInc = () => ({type: INCREMENT_COUNTER });
export const counterDec = () => ({type: DECREMENT_COUNTER });

export const addTodo =(payload) => ({ type:ADD_TODO,payload});
export const completeTodo =(id) => ({ type:COMPLETE_TODO, payload: id});
export const updateTodo =(payload) => ({ type:UPDATE_TODO, payload});
export const deleteTodo =(id) => ({ type:DELETE_TODO, payload:id});
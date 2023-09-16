const handleIncrement =()=>{
  
    return ({type:"INCREMENT",payload:1})
  }

  const handleDecrement=()=>{
   
     return ({type:"DECREMENT",payload:1})

    }

    const todosRequest=()=>{
      return{type:"GET_TODOS_REQUEST",}
    }
    const todosSuccess=(payload)=>{
      return{type:"GET_TODOS_SUCCESS",payload}

    }
    const todosFailure=()=>{
      return{type:"GET_TODOS_FAILURE",}

    }

    const AddTodoRequest=()=>{
      return {type:"ADD_TODOS_REQUEST"}
    }
    const AddTodoSuccess=()=>{
      return {type:"ADD_TODOS_SUCCESS"}
    }
    const AddTodoFailure=()=>{
      return {type:"ADD_TODOS_FAILURE"}
    }

    export {handleDecrement,
      handleIncrement,
      todosRequest,
      todosSuccess,
      todosFailure,
      AddTodoRequest,
      AddTodoSuccess,
      AddTodoFailure
    
    };
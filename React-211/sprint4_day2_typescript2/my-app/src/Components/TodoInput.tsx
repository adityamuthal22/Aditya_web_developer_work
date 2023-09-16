import React, { useState } from 'react'

interface TodoInputProps{
    addTodoHandler:(value:string)=>void;
}

const TodoInput = ({addTodoHandler}:TodoInputProps) => {
const [inputText,setInputText] =useState<string>("");

const changeHandler:React.ChangeEventHandler<HTMLInputElement> =(e)=>{
    setInputText(e.target.value)
}

const onClickHandler=()=>{
    addTodoHandler(inputText);
    setInputText("");
}

  return (
    <div>
        <input value={inputText} 
        onChange={changeHandler} />
        <button  onClick={onClickHandler}>ADD Todo</button>
    </div>
  )
}

export default TodoInput
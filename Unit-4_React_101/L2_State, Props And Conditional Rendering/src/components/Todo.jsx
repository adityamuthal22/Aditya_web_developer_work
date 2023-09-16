import React from 'react'
import Todoitem from './Todoitem';
import TodoList from './TodoList';

export const Todo = () => {
    const [value,setValue]=React.useState("");
    const [Todos,setTodos]=React.useState([]);


  return (
    <div>
        <h1>Todo List</h1>

        {
            Todos.map((Element)=>{
                return(
                    <>
                    <Todoitem Todoitem={Element} key={Element.id}/>
                    <TodoList Todoitem={Element}/>
                    </>
                )
            })
        }

        <input className="inputtodos"
        type="text"
        value={value}
        placeholder="Write Something"
        onChange={(e)=>{
            setValue(e.target.value);
        }}
        
        />

        <button className='addbtn'
        onClick={()=>{
            setTodos([...Todos,{id:Date.now(),iscompleted:false,value:value}])
            console.log(Todos);
            setValue("")
   
        }}
        >+</button>
    </div>
  );
};

export default Todo
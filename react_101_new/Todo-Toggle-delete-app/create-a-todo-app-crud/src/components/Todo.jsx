import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + Date.now(),
        title: text,
        status: false
      }
    ]);
    // console.log(...todos)
    // setTodos([...todos,{}])
  };
  const handleToggle = (id) => {
    const updatedData = todos.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status
          }
        : item
    );
    setTodos(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };

  console.log(todos);
  return (
    <div className="bigbox">
      <h1>Todo App</h1>
      {/* {add todo} */}
      <AddTodo handleAdd={handleAdd} />

      <div>
        {/* {todo List} */}

        <TodoList
          data={todos.filter((item) => !item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
      <div>
        <h2>COMPLETED</h2>
        <TodoList
          data={todos.filter((item) => item.status)}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

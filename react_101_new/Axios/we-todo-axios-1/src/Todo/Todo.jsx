import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { addTodo, deleteTodo, getTodos, tooggleTodoStatus } from "./api";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [data, setData] = useState([]);
  const [loaging, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleGetTodos();
  });

  function handleGetTodos() {
    setLoading(true);
    setError(false);
    getTodos()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  function handleAdd(title) {
    setLoading(true);
    addTodo({
      title,
      status: false
    }).then(() => handleGetTodos());
  }

  function handleToggle(id, newStatus) {
    setLoading(true);
    tooggleTodoStatus({ id, newStatus }).then(() => handleGetTodos());
  }

  function handleDelete(id) {
    setLoading(true);
    deleteTodo(id).then(() => handleGetTodos());
  }

  return (
    <div>
      {loaging && <div>...loading</div>}
      {error && <div>...error</div>}
      <AddTodo handleAdd={handleAdd} />
      <div>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
            status={item.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [data, setData] = useState([]);

  const getTodos = async () => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?-page=1&_limit=10`
      );
      data = await data.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // alert("making request")
    getTodos();
  }, []);

  return (
    <div>
      {data.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
}

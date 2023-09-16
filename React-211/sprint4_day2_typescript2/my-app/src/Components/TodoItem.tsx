import { TodoItems } from "./Todo"

const TodoItem = ({id,title,status}:TodoItems) => {
  return (
    <div>
        <span>{title} - {status ? "True" : "False"}</span>
    </div>
  )
}

export default TodoItem;
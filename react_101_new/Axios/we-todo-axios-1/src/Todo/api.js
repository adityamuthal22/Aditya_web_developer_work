import axios from "axios";
// https://aditya97-api.herokuapp.com/posts
export function getTodos() {
  return axios.get(
    "https://aditya97-api.herokuapp.com/posts"
  );
}

export function deleteTodo(id) {
  return axios({
    url: `https://aditya97-api.herokuapp.com/posts/${id}`,
    method: "DELETE"
  });
}

export function addTodo({ title, status }) {
  return axios({
    url: `https://aditya97-api.herokuapp.com/posts`,
    method: "POST",
    data: {
      title,
      status
    }
  });
}

export function tooggleTodoStatus({ id, newStatus }) {
  return axios({
    url: `https://aditya97-api.herokuapp.com/posts/${id}`,
    method: "PATCH",
    data: {
      status: newStatus
    }
  });
}

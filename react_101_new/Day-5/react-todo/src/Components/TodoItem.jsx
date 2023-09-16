export default function TodoItem({ todo }) {
  return (
    <div
      style={{ display: "flex", gap: "1rem", margin: "0.5rem" }}
      key={todo.id}
    >
      <div>{todo.id}:-</div>
      <div>{todo.title}.</div>
      <div style={{ color: "red" }}>{todo.status ? "Done" : "Not Done"}</div>
    </div>
  );
}

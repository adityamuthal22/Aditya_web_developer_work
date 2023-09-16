export default function TodoItem({
  id,
  title,
  status,
  handleToggle,
  handleDelete
}) {
  return (
    <div
      style={{
        padding: "1rem",
        // border: "1px solid ",
        borderRadius: "1rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        textAlign: "center",
        margin: "auto",
        marginTop: "20px",
        width: "350px",
        backgroundColor: "pink",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}
    >
      <div>
        <h3>{title}</h3>
      </div>
      <div>{status ? "DONE" : "NOT DONE"}</div>
      <button
        style={{ color: "teal", backgroundColor: "yellow" }}
        onClick={() => {
          handleToggle(id);
        }}
      >
        TOGGLE
      </button>
      <button
        style={{ color: "red", backgroundColor: "white" }}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

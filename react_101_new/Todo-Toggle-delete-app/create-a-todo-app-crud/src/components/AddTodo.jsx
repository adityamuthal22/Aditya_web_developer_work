import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        style={{ padding: "5px" }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Something"
      />
      <button
        style={{ padding: "5px", marginLeft: "10px" }}
        onClick={() => handleAdd(text)}
      >
        ADD
      </button>
    </div>
  );
}

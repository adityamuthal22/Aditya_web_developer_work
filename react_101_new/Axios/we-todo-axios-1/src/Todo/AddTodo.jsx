import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add something"
      />
      <button onClick={() => handleAdd(text)}>ADD</button>
    </div>
  );
}

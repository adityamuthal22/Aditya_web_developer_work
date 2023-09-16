import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {COUNTER_dECREMENT ,COUNTER_INCREMENT} from "./Store/action.types"
import { substract } from "./Store/action.types";
import { add } from "./Store/action.types";

function App() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    batch: "rct-101",
  });

  const updateForm = () => {
    console.log(form);
    form.name = "gaurav";
    setForm({ ...form });
  };

  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1 onClick={updateForm}>Counter: {count}</h1>
      <div>
        <button onClick={() => dispatch(add(10))}>+</button>
        <button onClick={() => dispatch(substract(10))}>-</button>
      </div>
      {form.name}
    </div>
  );
}

export default App;

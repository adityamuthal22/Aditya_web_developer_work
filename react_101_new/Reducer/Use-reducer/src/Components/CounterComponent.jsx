import { useReducer, useState } from "react";
import {
  countReducer,
  decrementAction,
  incrementAction
} from "../Reducer/reducer";

function CounterComponent() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const [amount, setamount] = useState();
  const [value, setvalue] = useState();
  return (
    <div>
      <h1> Count : {state.count} </h1>
      <input
        style={{ border: "1px solid black" }}
        value={amount}
        onChange={(e) => setamount(e.target.value)}
        placeholder="Ámount"
        type="number"
      />
      <input
        style={{ border: "1px solid black", margin: "5px" }}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        placeholder="Value"
        type="number"
      />

      <button
        style={{ border: "1px solid teal", backgroundColor: "orange" }}
        onClick={() => dispatch(incrementAction(amount, value))}
      >
        ADD
      </button>
      <button
        style={{ border: "1px solid teal", backgroundColor: "red" }}
        onClick={() => dispatch(decrementAction(amount, value))}
      >
        REDUCE
      </button>
    </div>
  );
}

export default CounterComponent;

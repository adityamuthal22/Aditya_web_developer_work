import { useReducer } from "react";
import CountReducer, {
  decrementAction,
  incrementAction
} from "../Reducer/Reducer";

export default function CounterComponent() {
  const [state, dispatch] = useReducer(CountReducer, { count: 0 });
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch(incrementAction)}>ADD</button>
      <button onClick={() => dispatch(decrementAction)}>REDUCE</button>
    </div>
  );
}

import { useState } from "react";
import { store } from "../Redux/store";
import CounterButton from "./CounterButton";
import CounterValue from "./CounterValue";

export default function Counter() {
  const [state, setState] = useState(0);

  store.subscribe(() => {
    setState((prev) => prev + 1);
  });

  return (
    <div>
      <h1>Counter Code</h1>
      <CounterValue />
      <CounterButton />
    </div>
  );
}

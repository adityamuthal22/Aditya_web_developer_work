import { useState } from "react";
import CounterCleanup from "./components/CounterCleanup";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);
  return(
  <div className="App">
  {show && <CounterCleanup />}
  <button onClick={()=>setShow(!show)}>Flag</button>
  </div>
);
}

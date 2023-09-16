import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  console.log(count);

  const handleAdd = () => {
    dispatch({
      type: "INCREMENT_AMOUNT"
    });
  };
  const handleReduce = () => {
    dispatch({
      type: "DECREMENT_AMOUNT"
    });
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

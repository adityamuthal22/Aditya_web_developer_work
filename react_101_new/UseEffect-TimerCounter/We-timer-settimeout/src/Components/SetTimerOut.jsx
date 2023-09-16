import { useEffect, useState } from "react";

export default function SetTimerOut() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <h1>Using Timerout-useEffect</h1>
      <h3>Counter:{count}</h3>
    </div>
  );
}

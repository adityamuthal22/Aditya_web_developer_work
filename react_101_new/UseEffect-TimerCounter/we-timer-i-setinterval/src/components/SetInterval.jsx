import { useEffect, useState } from "react";

export default function SetInterval() {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      console.log(`Closure:value is ${count}`);
      setCount((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div>
      <h1>Timer Using SetInterval</h1>
      <h3>Counter:{count}</h3>
    </div>
  );
}

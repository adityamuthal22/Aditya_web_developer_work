import { useEffect, useState } from "react";

export default function CounterCleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`component is mounting`);
    const id = setInterval(() => {
      console.log(`setInterval`, Date.now());
      setCount((prev) => prev + 1);
    }, 1000);

    const cleanup = () => {
      console.log(`component is unmounting`);
      clearInterval(id);
    };
    return cleanup;
  }, []);

  return (
    <div>
      <h1>Counter:{count}</h1>
      <h3>Update every second</h3>
    </div>
  );
}

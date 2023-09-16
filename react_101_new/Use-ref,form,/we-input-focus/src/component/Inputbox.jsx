import { useEffect, useRef, useState } from "react";

export default function Inputbox() {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
    handleFocus();
  }, []);

  const handleFocus = () => {
    ref.current.focus();
  };

  return (
    <div>
      <h1>Input Box</h1>
      <input ref={ref} placeholder=" type something" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

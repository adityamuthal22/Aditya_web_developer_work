import { useRef } from "react";

export default function ScrollToTop() {
  const ref = useRef();

  const handleClick = () => {
    ref.current.scrollTop = 0;
  };

  const data = new Array(100).fill(0).map((item, i) => <li key={i}>{i}</li>);

  return (
    <div>
      <div
        ref={ref}
        style={{
          border: "1px solid black",
          height: "200px",
          overflow: "scroll"
        }}
      >
        <ul>{data}</ul>
      </div>
      <button onClick={handleClick}>Scroll To Top</button>
    </div>
  );
}

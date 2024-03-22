import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const clickHandler = (e) => {
    if (e.target.innerText === "Increment") {
      setCount((prev) => prev + 1);
    } else if (e.target.innerText === "Decrement") {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={clickHandler} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

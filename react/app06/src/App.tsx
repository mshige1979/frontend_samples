import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter
        count={count}
        countUp={() => {
          setCount(count + 10);
        }}
        countDown={() => {
          setCount(count - 10);
        }}
      />
    </div>
  );
}

export default App;

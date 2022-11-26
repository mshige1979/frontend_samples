import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const list = [
    {
      id: 10,
    },
    {
      id: 20,
    },
    {
      id: 30,
    },
  ];
  return (
    <div className="App">
      {list.map((item, index) => {
        return (
          <div>
            <span>{item.id}:</span>
            <Hello />
          </div>
        );
      })}
    </div>
  );
}

export default App;

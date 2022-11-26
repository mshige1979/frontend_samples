import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello text={"hogehoge"} memo={"foofoo"} />
    </div>
  );
}

export default App;

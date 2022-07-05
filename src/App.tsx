import React from "react";
import "./App.css";

//components
import Background from "./components/Background/Background";
import CounterCard from "./components/CounterCard/CounterCard";

function App() {
  return (
    <div className="App">
      <Background />
      <CounterCard />
    </div>
  );
}

export default App;

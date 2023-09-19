import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CallApi from "./apiCallTesting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star wars API testing</h1>
      </header>
      <CallApi />
    </div>
  );
}

export default App;

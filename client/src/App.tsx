import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Authentication from "./components/Authentication";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Authentication/>
    </div>
  );
}

export default App;

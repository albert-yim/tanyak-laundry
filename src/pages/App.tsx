import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compoennts from "./Components/Components";
import Login from "./Login/Login";

function App() {
  let buttonClick = () => console.log("button clicked");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/components" element={<Compoennts />}></Route>
      </Routes>
    </BrowserRouter>
}

export default App;

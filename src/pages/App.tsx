import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compoennts from "./Components/Components";
import Login from "./Login/Login";
import Main from "./Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        //Edited to show Main page first for testing
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/components" element={<Compoennts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

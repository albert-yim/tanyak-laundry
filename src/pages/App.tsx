import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compoennts from "./Components/Components";
import Login from "./Login/Login";
import Main from "./Main/Main";
import { User } from "../types";

const DemoUser: User = {
  id: "23-70001234",
  name: "김공군",
  rank: "병장",
  serviceStartedAt: "20240320T0000",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Main user={DemoUser} />}></Route>
        <Route path="/components" element={<Compoennts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

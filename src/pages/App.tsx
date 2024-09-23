import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Compoennts from "./Components/Components";
import Login from "./Login/Login";
import Main from "./Main/Main";
import { User } from "../types";
import { signInWithId } from "../api";
import { supabase } from "../supabase";
import { Session } from "@supabase/supabase-js";

const DemoUser: User = {
  id: "23-70001234",
  name: "김공군",
  rank: "병장",
  serviceStartedAt: "20240320T0000",
};

function App() {
  const [session, setSession] = useState<Session | null>(null);

  // const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_e, session) => {
      setSession(session);
    });
  }, []);
  useEffect(() => {
    if (!session) {
      // navigate("/login", { replace: true });

      return;
    }
    // navigate("/", { replace: true });
  }, [session]);
  console.log("session");
  console.log(session);
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

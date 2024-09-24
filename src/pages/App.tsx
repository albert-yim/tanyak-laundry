import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Compoennts from "./Components/Components";
import Login from "./Login/Login";
import Main from "./Main/Main";
import Logout from "./Logout/Logout";
import { User } from "../types";
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

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      console.log("auth state changed");
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={session ? <Navigate to="/" replace /> : <Login />}
        ></Route>
        <Route
          path="/"
          element={
            session ? (
              <Main user={DemoUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        ></Route>
        <Route path="/components" element={<Compoennts />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

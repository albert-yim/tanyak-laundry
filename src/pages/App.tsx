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
import { fetchCurrentUser } from "../api";

const DemoUser: User = {
  id: "uuid",
  serviceId: "23-70001234",
  class: "846",
  name: "김공군",
  rank: "병장",
  serviceStartedAt: "20240320T0000",
};

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_e, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setUser(null);
      return;
    }

    fetchCurrentUser().then((user) => setUser(user));
  }, [session]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={session ? <Navigate to="/" replace /> : <Login />}
        ></Route>
        <Route
          path="/"
          element={user ? <Main user={user} /> : <>Loading</>}
        ></Route>
        <Route path="/components" element={<Compoennts />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

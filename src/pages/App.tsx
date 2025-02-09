import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compoennts from "./Components/Components";
import Login from "./Login/Login";
import Main from "./Main/Main";
import Logout from "./Logout/Logout";
import Loading from "./Loading/Loading";
import Faq from "./Faq/Faq";
import { User } from "@src/types";
import { supabase } from "@src/supabase";
import { Session } from "@supabase/supabase-js";
import { fetchCurrentUser } from "@src/api";

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
        {session ? (
          <Route
            path="/"
            element={user ? <Main user={user} /> : <Loading />}
          ></Route>
        ) : (
          <Route path="/" element={<Login />}></Route>
        )}
        <Route path="/components" element={<Compoennts />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/loading" element={<Loading />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";

export default function LogOut() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.signOut();
    navigate("/login", { replace: true });
  }, []);
  return <></>;
}

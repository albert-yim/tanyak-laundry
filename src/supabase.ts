import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fbyylzqmgyinjqjoalng.supabase.co";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseKey);

import { AuthResponse, AuthTokenResponsePassword } from "@supabase/supabase-js";
import { convertAppliancesPayload } from "./helper/payloadConvert";
import { supabase } from "./supabase";
import {
  ApplianceMode,
  Appliance,
  AppliancePayload,
  UsageHistoryInsertPayload,
  UserInsertPayload,
  UserPayload,
} from "./types";

export const fetchAppliances = async (): Promise<Appliance[]> => {
  const { data, error } = await supabase
    .from("appliance")
    .select(
      `id,
      location,
      status,
      type,
      usage_history!last_usage_id(start_time, end_time, user(*))`,
    )
    .returns<AppliancePayload[]>();
  if (error) {
    console.error("Error fetching modes:", error);
    return [];
  }

  return convertAppliancesPayload(data);
};

/*
 * Insert UsageHistory to Backend
 */
export const insertUsageHistory = async (data: UsageHistoryInsertPayload) => {
  const { error } = await supabase.from("usage_history").insert([data]);
  if (error) {
    console.log("Error insert data in UsageHistory");
  }
};

/**
 * SignUp with email
 */
export const signUpWithUserData = async (
  userData: UserInsertPayload,
): Promise<AuthResponse> => {
  const { service_id } = userData;
  //SignUp with supabase email auth
  const signUpPromise = await supabase.auth.signUp({
    email: `${service_id}@tanyak.com`,
    password: service_id,
  });

  if (signUpPromise.data.user) {
    //Add user data on supabse backend
    await supabase.from("user").insert([userData]);
  }

  return signUpPromise;
};

/**
 * SignIn with email
 */
export const signInWithId = async (id: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: `${id}@tanyak.com`,
    password: id,
  });
  return { data, error };
};

/**
 * fetch user data with session user id
 */
export const fetchCurrentUser = async () => {
  //get current session user
  const authResponse = await supabase.auth.getUser();
  if (!!authResponse.error || !authResponse.data.user?.id) {
    console.log("[ERROR] fetch current user: error getUser");
    return null;
  }
  const uid = authResponse.data.user.id;
  const { data, error } = await supabase
    .from("user")
    .select("id, name, class, service_id")
    .eq("id", uid)
    .returns<UserPayload[]>();
  if (!!error || !data.length) {
    console.log("[ERROR] fetch current user: error fetch user data");
    return null;
  }
  const user = data[0];
  return {
    id: user.id,
    name: user.name,
    class: user.class,
    serviceId: user.service_id,
  };
};

import { AuthResponse, AuthTokenResponsePassword } from "@supabase/supabase-js";
import {
  convertApplianceModePayload,
  convertAppliancesPayload,
} from "./helper/payloadConvert";
import { supabase } from "./supabase";
import {
  ApplianceMode,
  Appliance,
  AppliancePayload,
  ApplianceModePayload,
  UsageHistoryInsertPayload,
  User,
  InsertUser,
} from "./types";

export const fetchAppliances = async (): Promise<Appliance[]> => {
  const { data, error } = await supabase
    .from("appliance")
    .select(
      `id,
      location,
      status,
      type,
      usage_history!last_usage_id(created_at, end_at, user(name))`,
    )
    .returns<AppliancePayload[]>();
  if (error) {
    console.error("Error fetching modes:", error);
    return [];
  }

  return convertAppliancesPayload(data);
};

/*
 * fetch washing_machine modes
 */
export const fetchWashingMachineModes = async (): Promise<ApplianceMode[]> => {
  const { data, error } = await supabase
    .from("appliance_mode")
    .select("*")
    .eq("appliance_type", "washing_machine")
    .returns<ApplianceModePayload[]>();
  if (error) {
    console.error("Error fetching modes:", error);
    return [];
  }

  return convertApplianceModePayload(data);
};

/*
 * fetch dryer modes
 */
export const fetchDryerModes = async (): Promise<ApplianceMode[]> => {
  const { data, error } = await supabase
    .from("appliance_mode")
    .select("*")
    .eq("appliance_type", "dryer")
    .returns<ApplianceModePayload[]>();
  if (error) {
    console.error("Error fetching modes:", error);
    return [];
  }

  return convertApplianceModePayload(data);
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
export const signUpWithUserData = async (user: User): Promise<AuthResponse> => {
  const { serviceId } = user;
  //SignUp with supabase email auth
  const signUpPromise = await supabase.auth.signUp({
    email: `${serviceId}@tanyak.com`,
    password: serviceId,
  });

  if (signUpPromise.data.user) {
    //Add user data on supabse backend
    const insertData: InsertUser = {
      service_id: serviceId,
      class: user.class,
      name: user.name,
    };
    await supabase.from("user").insert([insertData]);
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

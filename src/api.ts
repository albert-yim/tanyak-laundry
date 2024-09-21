import { supabase } from "./supabase";
import { UsageHistory, ApplianceMode } from "./types";

export const fetchModes = async (): Promise<ApplianceMode[]> => {
  const { data, error } = await supabase.from("ApplianceMode").select("*");
  if (error) {
    console.error("Error fetching modes:", error);
    throw new Error(error.message);
  }

  return data;
};

export const fetchWasherModes = async (): Promise<ApplianceMode[]> => {
  const { data, error } = await supabase
    .from("ApplianceMode")
    .select("*")
    .eq("appliance_type", "washing_machine");
  if (error) {
    console.error("Error fetching modes:", error);
    throw new Error(error.message);
  }

  return data;
};
export const fetchDryerModes = async (): Promise<ApplianceMode[]> => {
  const { data, error } = await supabase
    .from("ApplianceMode")
    .select("*")
    .eq("appliance_type", "dryer");
  if (error) {
    console.error("Error fetching modes:", error);
    throw new Error(error.message);
  }

  return data;
};

const fetchWashingMachineHistory = async (): Promise<UsageHistory[]> => {
  const { data, error } = await supabase.from("UsageHistory").select(`
created_at,
end_at,
Appliance(type),
User(id, name)
`);
  if (error) {
    console.log("Error fetching history");
  }
  return data as any;
};

const insertUsageHistory = async (data: Omit<UsageHistory, "created_at">) => {
  const { error } = await supabase.from("UsageHistory").insert([data]);
  if (error) {
    console.log("Error insert data in UsageHistory");
  }
};
export { fetchWashingMachineHistory, insertUsageHistory };

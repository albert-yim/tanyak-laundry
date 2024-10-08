import { Appliance, AppliancePayload } from "@src/types";

/**
 * helper function to convert
 * from Appliances backend data type
 * to appliance frontend data type
 */
export function convertAppliancesPayload(
  payload: AppliancePayload[],
): Appliance[] {
  return payload.map((data) => ({
    id: data.id,
    location: data.location,
    type: data.type,
    status: data.status,
    lastUsage: {
      id: data.usage_history?.id ?? "",
      status: data.usage_history?.status ?? "completed",
      startTime: data.usage_history?.start_time ?? "",
      endTime: data.usage_history?.end_time ?? "",
      user: data.usage_history?.user ?? {
        name: "김공군",
        serviceId: "00-00000000",
        class: "000",
        id: "",
      },
    },
  }));
}

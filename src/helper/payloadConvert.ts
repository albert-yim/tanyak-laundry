import { Appliance, ApplianceMode, AppliancePayload } from "../types";

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
    last_usage: data.usage_history
      ? {
          startTime: data.usage_history.start_time,
          endTime: data.usage_history.end_time,
          user: data.usage_history.user,
        }
      : null,
  }));
}

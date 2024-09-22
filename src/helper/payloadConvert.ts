import {
  Appliance,
  ApplianceMode,
  ApplianceModePayload,
  AppliancePayload,
} from "../types";

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
          createdAt: data.usage_history.created_at,
          endAt: data.usage_history.end_at,
          user: data.usage_history.user,
        }
      : null,
  }));
}

/**
 * helper function to convert
 * from ApplianceMode backend data type
 * to applianceMode frontend data type
 */
export function convertApplianceModePayload(
  payload: ApplianceModePayload[],
): ApplianceMode[] {
  return payload.map((data) => ({
    id: data.id,
    applianceType: data.appliance_type,
    name: data.name,
    duration: data.duration,
  }));
}

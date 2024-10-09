import { ApplianceStatus, ApplianceType } from "./Appliance";
import { User } from "./User";

/**
 * UsageHistory Payload from backend
 */
export type UsageHistoryPayload = {
  id: string;
  start_time: string;
  end_time: string;
  user: User;
  status: ApplianceStatus;
};

/**
 * Payload for insert usageHistroy to backend
 */
export type UsageHistoryInsertPayload = {
  //user id
  uid: string;
  //appliance id
  aid: string;
  // end time of appliance
  end_time: string;
};

export type AppliancePayload = {
  id: string;
  location: number;
  type: ApplianceType;
  status: boolean;
  usage_history?: UsageHistoryPayload;
};

/**
 * payload for fetch user data
 */
export type UserPayload = {
  id: string;
  name: string;
  class: string;
  service_id: string;
};

/**
 * payload for insert user data
 */
export type UserInsertPayload = {
  name: string;
  class: string;
  service_id: string;
};

import { ApplianceType } from "./Appliance";
import { User } from "./User";

/**
 * UsageHistory Payload from backend
 */
export type UsageHistoryPayload = {
  created_at: string;
  end_at: string;
  user: User;
};

/**
 * Payload for insert usageHistroy to backend
 */
export type UsageHistoryInsertPayload = {
  user_id: string;
  mode_id: number;
  appliance_id: number;
  end_at: string;
};

export type AppliancePayload = {
  id: number;
  location: number;
  type: ApplianceType;
  status: boolean;
  usage_history: UsageHistoryPayload;
};

export type ApplianceModePayload = {
  id: number;
  appliance_type: ApplianceType;
  // name of mode
  name: string;
  // duration of mode in min
  duration: number;
};

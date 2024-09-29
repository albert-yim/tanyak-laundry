import { User } from "./User";

export type ApplianceType = "dryer" | "washing_machine";

export type ApplianceMode = {
  id: number;
  applianceType: ApplianceType;
  // name of mode
  name: string;
  // duration of mode in min
  duration: number;
};

export type Appliance = {
  //uuid
  id: string;
  // location of Appliance
  location: number;
  // is the appliacne running or not
  status: boolean;
  // type of Appliance
  type: ApplianceType;
  // last usage of this appliance
  lastUsage: UsageHistory;
};

export type UsageHistory = {
  // start time of Appliance
  startTime: string;
  // end time of Appliance
  endTime: string;
  // user who used appliance
  user: User;
};

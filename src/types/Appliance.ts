import { User } from "./User";

type ApplianceType = "dryer" | "washing_machine";
export type ApplianceMode = {
  id: number;
  type: ApplianceType;
  // name of mode
  name: string;
  // duration of mode in min
  duration: number;
};

export type Appliance = {
  id: number;
  // location of Appliance
  location: number;
  // is the appliacne running or not
  status: boolean;
  // type of Appliance
  type: ApplianceType;
};

export type UsageHistory = {
  // start time of Appliance
  created_at: string;
  // end time of Appliance
  end_at: string;
  // which appliance is
  appliance_id: number;
  // user who used appliance
  user_id: string;
  // which mode is applied
  mode_id: number;
};

export type Dryer = {
  user: User;
  mode: "regular" | "else";
  startTime: string;
  endTime: string;
  position: 1 | 2 | 3 | 4;
};

export type Laundry = {
  user: User;
  mode:
    | "표준세탁"
    | "강력세탁"
    | "청정세탁"
    | "울/란제리"
    | "합성섬유"
    | "헹굼+탈수";
  startTime: string;
  endTime: string;
  position: 1 | 2 | 3 | 4;
};

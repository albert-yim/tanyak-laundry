import React from "react";
import styles from "./Main.module.scss";
import LaunDryerButton from "../../components/LaunDryerButton/LaunDryerButton";
import Modal from "../../components/Modal/Modal";
import ModeButton from "../../components/ModeButton/ModeButton";

type MainType = {
  userName: string;
};

const demoDB = [
  {
    id: "23-70006795",
    name: "임찬양",
    rank: "병장",
    type: "dryer",
    typeNumber: 1,
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
  },
  {
    id: "23-70016324",
    name: "김건중",
    rank: "상병",
    type: "washing",
    typeNumber: 1,
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
  },
];

const demoUSER1: User = {
  id: "23-70006795",
  name: "임찬양",
  rank: "병장",
};

const demoUSER2: User = {
  id: "23-70016324",
  name: "김건중",
  rank: "상병",
};

type User = {
  id: string;
  name: string;
  rank: "병장" | "상병" | "일병" | "이병";
};

//function that automatically generates users from json list

export default function Main({ userName }: MainType) {
  let userDBID = demoDB[1].id;
  let userDBName = demoDB[1].name;
  let userDBRank = demoDB[1].rank;
  let userDBType = demoDB[1].type;
  let userDBTypeNumber = demoDB[1].typeNumber;
  let userDBStartTime = demoDB[1].startTime;
  let userDBEndTime = demoDB[1].endTime;

  return (
    <div className={styles.mainWrapper}>
      <span className={styles.mainText}>{userName}님 환영합니다</span>
      <div className={styles.machineWrapper}>
        <LaunDryerButton
          type="dryer"
          typeNumber={1}
          user={demoUSER1}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
        <LaunDryerButton
          type="dryer"
          typeNumber={2}
          user={demoUSER2}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
      </div>
      <div className={styles.machineWrapper}>
        <LaunDryerButton
          type="laundry"
          typeNumber={1}
          user={demoUSER1}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
        <LaunDryerButton
          type="laundry"
          typeNumber={2}
          user={demoUSER2}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
      </div>
    </div>
  );
}

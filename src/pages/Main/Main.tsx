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

type User = {
  id: string;
  name: string;
  rank: "병장" | "상병" | "일병" | "이병";
};

export default function Main({ userName }: MainType) {
  let userDBID = demoDB[1].id;
  let userDBName = demoDB[1].name;
  let userDBRank = demoDB[1].rank as User["rank"];

  const user1: User = {
    id: userDBID,
    name: userDBName,
    rank: userDBRank,
  };

  return (
    <div className={styles.mainWrapper}>
      <span className={styles.mainText}>{userName}님 환영합니다</span>
      <div className={styles.machineWrapper}>
        <LaunDryerButton
          type="dryer"
          typeNumber={1}
          user={user1}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
        <LaunDryerButton
          type="dryer"
          typeNumber={2}
          user={user1}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
      </div>
      <div className={styles.machineWrapper}>
        <LaunDryerButton
          type="laundry"
          typeNumber={1}
          user={user1}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
        <LaunDryerButton
          type="laundry"
          typeNumber={2}
          user={user1}
          startTime={"2024-09-03T23:23:23"}
          endTime={"2024-09-03T23:59:59"}
        />
      </div>
    </div>
  );
}

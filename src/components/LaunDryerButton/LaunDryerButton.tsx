import React, { useMemo } from "react";

import styles from "./LaunDryerButton.module.scss";
import {ReactComponent as DRYER_ICON} from "../../assets/dryer.svg";
import {ReactComponent as LAUNDRY_ICON} from "../../assets/washingMachine.svg";

type User = {
  id: string;
  name: string;
  rank: "병장" | "상병" | "일병" | "이병";
};
type LaunDryerButton = {
  onClick: () => void;
  type: "laundry" | "dryer";
  typeNumber: 1 | 2 | 3 | 4;
  user: User;
  startTime: string;
  endTime: string;
};

export default function LaunDryerButton({
  onClick,
  type,
  typeNumber,
  user,
  startTime,
  endTime,
}: LaunDryerButton) {
  const typeName = type === "dryer" ? "건조기" : "세탁기";
  const typeIcon = type === "dryer" ? <DRYER_ICON width="15"/> : <LAUNDRY_ICON width="15"/>
  const isUsed = useMemo(() => {
    //TODO: Implement the logic to calculate the rest time
    const isUsed = false;
    return isUsed;
  }, [endTime]);
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.progress} />

      <div className={styles.contentsWrapper}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            {typeIcon}
          </div>
          <span>{`${typeNumber}번 ${typeName}`}</span>
        </div>
        <span className={styles.usage}>{isUsed ? "사용 중" : "사용 가능"}</span>
        <span className={styles.time}>
          {isUsed ? "35m 25s" : "마지막 사용: "}
        </span>
        <span className={styles.name}>{`${user.rank} ${user.name}`}</span>
      </div>

    </div>
  );
}

const USER1: User = {
  id: "23-70006795",
  name: "임찬양",
  rank: "병장",
};
export function LaunDryerButtonTest() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 30,
        padding: 30,
      }}
    >
      <LaunDryerButton
        onClick= {()=>console.log("Clicked!")}
        type="laundry"
        typeNumber={1}
        user={USER1}
        startTime={"2024-09-03T23:23:23"}
        endTime={"2024-09-03T23:59:59"}
      />
      <LaunDryerButton
        onClick= {()=>console.log("Clicked!")}
        type="dryer"
        typeNumber={3}
        user={USER1}
        startTime={"2024-09-03T23:23:23"}
        endTime={"2024-09-03T23:59:59"}
      />
    </div>
  );
}

import React, { useMemo } from "react";

import styles from "./ApplianceButton.module.scss";
import { ReactComponent as DRYER_ICON } from "../../assets/dryer.svg";
import { ReactComponent as LAUNDRY_ICON } from "../../assets/washingMachine.svg";
import { UsageHistory } from "../../types";

type ApplianceButtonType = {
  onClick: () => void;
  type: "washing_machine" | "dryer";
  position: number;
  lastUsage: UsageHistory;
};

export default function ApplianceButton({
  onClick,
  type,
  position,
  lastUsage,
}: ApplianceButtonType) {
  const typeName = type === "dryer" ? "건조기" : "세탁기";
  const typeIcon =
    type === "dryer" ? <DRYER_ICON width="15" /> : <LAUNDRY_ICON width="15" />;

  const { endTime, user } = lastUsage;
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
          <div className={styles.iconWrapper}>{typeIcon}</div>
          <span>{`${position}번 ${typeName}`}</span>
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

const USER1: UsageHistory["user"] = {
  id: "11",
  serviceId: "23-70006795",
  name: "임찬양",
  class: "846",
};
export function ApplianceButtonTest() {
  const lastUsage: UsageHistory = {
    user: USER1,
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 30,
        padding: 30,
      }}
    >
      <ApplianceButton
        onClick={() => console.log("Clicked!")}
        type="washing_machine"
        position={1}
        lastUsage={lastUsage}
      />
      <ApplianceButton
        onClick={() => console.log("Clicked!")}
        type="dryer"
        position={3}
        lastUsage={lastUsage}
      />
    </div>
  );
}

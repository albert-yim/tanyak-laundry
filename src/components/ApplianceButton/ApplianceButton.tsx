import React, { useEffect, useMemo, useState } from "react";
import styles from "./ApplianceButton.module.scss";
import { ReactComponent as DRYER_ICON } from "../../assets/dryer.svg";
import { ReactComponent as LAUNDRY_ICON } from "../../assets/washingMachine.svg";
import { UsageHistory } from "../../types";
import moment from "moment";

type ApplianceButtonType = {
  onClick: () => void;
  type: "washing_machine" | "dryer";
  location: number;
  lastUsage: UsageHistory;
};

export default function ApplianceButton({
  onClick,
  type,
  location,
  lastUsage,
}: ApplianceButtonType) {
  //remainingTime in sec
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const isUsed = remainingTime > 0;
  const typeName = type === "dryer" ? "건조기" : "세탁기";
  const typeIcon =
    type === "dryer" ? <DRYER_ICON width="15" /> : <LAUNDRY_ICON width="15" />;
  const totalTime = moment(lastUsage.endTime).diff(
    moment(lastUsage.startTime),
    "second",
  );
  const remainingPercent = (remainingTime / totalTime) * 100;

  function calTimeDiffInSec(endTime: string) {
    const timeDiff = moment(endTime).diff(moment(), "second");
    if (endTime === "" || timeDiff <= 0) return 0;
    return timeDiff;
  }

  useEffect(() => {
    const timeDiff = calTimeDiffInSec(lastUsage.endTime);
    // Do not run timer if endTime is passed
    if (timeDiff <= 0) return;

    setRemainingTime(timeDiff);
    //set timer to re calculate remainingTime every 10sec
    const timer = setInterval(() => {
      const timeDiff = calTimeDiffInSec(lastUsage.endTime);
      setRemainingTime(timeDiff);

      if (timeDiff <= 0) {
        // stop to run inerval if endtime is over current time
        setRemainingTime(0);
        clearInterval(timer);
      }
    }, 10 * 1000);

    // timer clear when unmount compount
    return () => clearInterval(timer);
  }, [lastUsage]);

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div
        className={styles.waveProgress}
        style={{
          display: isUsed ? "unset" : "none",
          top: `${remainingPercent}%`,
        }}
      />
      <div className={styles.contentsWrapper}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>{typeIcon}</div>
          <span>{`${location}번 ${typeName}`}</span>
        </div>
        <span className={styles.usage}>{isUsed ? "사용 중" : "사용 가능"}</span>
        <span className={styles.time}>
          {isUsed
            ? `남은시간: ${Math.ceil(remainingTime / 60)}분`
            : "마지막 사용: "}
        </span>
        <span
          className={styles.name}
        >{`${lastUsage.user.class}기 ${lastUsage.user.name}`}</span>
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
        location={1}
        lastUsage={lastUsage}
      />
      <ApplianceButton
        onClick={() => console.log("Clicked!")}
        type="dryer"
        location={3}
        lastUsage={lastUsage}
      />
    </div>
  );
}

import React from "react";

import styles from "./LaunDryerButton.module.scss";
import DRYER_ICON from "../../assets/dryer.svg";
import LAUNDRY_ICON from "../../assets/washingMachine.svg";

type User = {
  id: string;
  name: string;
};
type LaundDryerButton = {
  type: "laundry" | "dryer";
  typeNumber: 1 | 2 | 3 | 4;
  user: User;
  startTime: string;
  endTime: string;
};

export default function LaundDryerButton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={DRYER_ICON} alt="dryer icon"></img>
        <span>1 dryer</span>
      </div>
      <span>Used</span>
      <span>35m 25s</span>
      <span>Kim MoSi</span>
    </div>
  );
}

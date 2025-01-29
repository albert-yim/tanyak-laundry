import React from "react";
import styles from "./Faq.module.scss";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";

export default function Faq() {
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.logoWrapper}>
        <LOGOICON width="250px" height="250px" />
      </div>
    </div>
  );
}

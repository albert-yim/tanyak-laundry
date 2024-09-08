import React from "react";
import styles from "./Main.module.scss";
import LaunDryerButton from "../../components/LaunDryerButton/LaunDryerButton";
import Modal from "../../components/Modal/Modal";
import ModeButton from "../../components/ModeButton/ModeButton";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main_content}>
        <div className={styles.main_content_title}>Main Page</div>
        <div className={styles.main_content_button}></div>
        <div className={styles.main_content_button}></div>
      </div>
    </div>
  );
}

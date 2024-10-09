import React from "react";
import styles from "./StopModal.module.scss";
import Modal from "../Modal/Modal";
import ModeButton from "../ModeButton/ModeButton";
import { Appliance, OptionType, ModeButtonOptionType, User } from "@src/types";

export type StopModalTypes = {
  onClose: (refetch: boolean) => void;
  appliance: Appliance | null;
  visible: boolean;
};

export default function StopModal({
  visible,
  appliance,
  onClose,
}: StopModalTypes) {
  const modeButtonClicked = async () => {
    if (!appliance?.id) {
      console.log("[ERROR] Insert usageHistory: aid cannot be empty stirng");
      return;
    }
    onClose(true);
  };

  if (appliance == null) return <></>;

  return (
    <Modal onClose={() => onClose(false)} visible={visible}>
      <div className={styles.contentWrapper}>
        <div className={styles.locationText}>
          {appliance.location}번{" "}
          {appliance.type === "dryer" ? "건조기" : "세탁기"}
        </div>
        <div className={styles.modeButton}>
          <ModeButton
            onClick={modeButtonClicked}
            modeOptions={{ left: [], right: [] }}
            selectedMode={{ mode: "강력세탁", duration: 10, position: "top" }}
            setSelectedMode={() => {}}
            icon={"stop"}
          />
        </div>
      </div>
    </Modal>
  );
}

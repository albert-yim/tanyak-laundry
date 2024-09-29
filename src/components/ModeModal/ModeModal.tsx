import React, { useState, ReactNode } from "react";
import styles from "./ModeModal.module.scss";
import Modal from "../Modal/Modal";
import ModeButton from "../ModeButton/ModeButton";
import { Appliance, OptionType, ModeButtonOptionType } from "../../types";

export type ModeModalTypes = {
  // callback function to close modal
  onClose: () => void;
  // selected Appliance
  appliance: Appliance | null;
  // wheather modal is visible or not
  visible: boolean;
};

export default function ModeModal({
  visible,
  appliance,
  onClose,
}: ModeModalTypes) {
  const [selectedMode, setSelectedMode] = useState<OptionType>(
    LAUNDRY_OPTIONS?.left?.[0]!,
  );

  if (appliance == null) return <></>;

  const modeOptions =
    appliance.type === "dryer" ? DRYER_OPTIONS : LAUNDRY_OPTIONS;
  const typeName = appliance.type === "dryer" ? "건조기" : "세탁기";

  const currentDate = new Date();
  const calculatedTime = currentDate.setMinutes(
    currentDate.getMinutes() + selectedMode.duration,
  );
  const calculatedDate = new Date(calculatedTime);
  const calculatedDateHours =
    (calculatedDate.getHours() < 10 ? "0" : "") + calculatedDate.getHours();
  const calculatedDateMinutes =
    (calculatedDate.getMinutes() < 10 ? "0" : "") + calculatedDate.getMinutes();

  return (
    <Modal onClose={onClose} visible={visible}>
      <div className={styles.contentWrapper}>
        <div className={styles.locationText}>
          {appliance.location}번 {typeName}
        </div>
        <div className={styles.modeButton}>
          <ModeButton
            onClick={onClose}
            modeOptions={modeOptions}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
            icon={appliance.type}
          />
        </div>
        <div className={styles.durationText}>{selectedMode.duration}m</div>
        <div className={styles.endTimeText}>
          {calculatedDateHours}:{calculatedDateMinutes}
        </div>
      </div>
    </Modal>
  );
}

const DRYER_OPTIONS: ModeButtonOptionType = {
  left: [
    {
      mode: "표준건조",

      position: "top",

      duration: 45,
    },

    {
      mode: "강력건조",

      position: "bottom",

      duration: 45,
    },
  ],

  right: [
    {
      mode: "섬세의류",

      position: "top",

      duration: 45,
    },

    {
      mode: "10분건조",

      position: "bottom",

      duration: 45,
    },
  ],
};

const LAUNDRY_OPTIONS: ModeButtonOptionType = {
  left: [
    {
      mode: "표준세탁",

      position: "top",

      duration: 36,
    },

    {
      mode: "강력세탁",

      position: "center",

      duration: 50,
    },

    {
      mode: "청정세탁",

      position: "bottom",

      duration: 36,
    },
  ],

  right: [
    {
      mode: "물/란제리",

      position: "top",

      duration: 36,
    },

    {
      mode: "합성섬유",

      position: "center",

      duration: 36,
    },

    {
      mode: "헹굼+탈수",

      position: "bottom",

      duration: 36,
    },
  ],
};

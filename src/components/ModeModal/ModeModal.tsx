import React, { useState, useEffect } from "react";
import styles from "./ModeModal.module.scss";
import Modal from "../Modal/Modal";
import ModeButton from "../ModeButton/ModeButton";
import TimePicker from "../TimePicker/TimePicker";
import { Appliance, OptionType, ModeButtonOptionType, User } from "@src/types";
import moment from "moment";
import { insertUsageHistory } from "@api";

export type ModeModalTypes = {
  // callback function to close modal
  onClose: (refetch: boolean) => void;
  // current user
  user: User;
  // selected Appliance
  appliance: Appliance | null;
  // wheather modal is visible or not
  visible: boolean;
};

export default function ModeModal({
  visible,
  user,
  appliance,
  onClose,
}: ModeModalTypes) {
  const [selectedMode, _setSelectedMode] = useState<OptionType>(
    LAUNDRY_OPTIONS?.left?.[0]!
  );
  const [editDuration, setEditDuration] = useState<number>(
    selectedMode.duration
  );

  // set modeOptions depend on appliance type
  const modeOptions =
    appliance?.type === "dryer" ? DRYER_OPTIONS : LAUNDRY_OPTIONS;

  useEffect(() => {
    if (!!visible && !!modeOptions.left) {
      // set selectedMode when modal is visible
      setSelectedMode(modeOptions.left[0]);
    }
  }, [visible, modeOptions]);

  //function to return estimate end time with selectedMode
  const getEndTime = (format: string = "") => {
    const startTime = new Date();
    return moment(startTime)
      .add(editDuration, "minutes")
      .local()
      .format(format);
  };

  // insert data on the backend and close modal
  const modeButtonClicked = async () => {
    if (!appliance?.id) {
      console.log("[ERROR] Insert usageHistory: aid cannot be empty stirng");
      return;
    }

    await insertUsageHistory({
      uid: user.id,
      aid: appliance.id,
      end_time: getEndTime(),
    });

    onClose(true);
  };

  const setSelectedMode = (mode: OptionType) => {
    if (appliance?.lastUsage.status === "active") {
      return;
    }
    _setSelectedMode(mode);
    setEditDuration(mode.duration);
  };

  // return empty node if appliance is null
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
            modeOptions={modeOptions}
            selectedMode={selectedMode}
            setSelectedMode={setSelectedMode}
            icon={appliance.type}
          />
        </div>
        <div className={styles.timePicker}>
          <TimePicker time={editDuration} setTime={setEditDuration} />
        </div>
        <div className={styles.endTimeText}>{getEndTime("HH:mm")}</div>
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
      duration: 55,
    },
  ],

  right: [
    {
      mode: "물/란제리",
      position: "top",
      duration: 35,
    },
    {
      mode: "합성섬유",
      position: "center",
      duration: 38,
    },
    {
      mode: "헹굼+탈수",
      position: "bottom",
      duration: 20,
    },
  ],
};

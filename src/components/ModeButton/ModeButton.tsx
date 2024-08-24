import React, { MouseEventHandler, useEffect, useState } from "react";
import styles from "./ModeButton.module.scss";
import cn from "classnames";
import ModeOption from "./ModeOption";
import LAUNDRY_ICON from "../../assets/laundry.svg";

type ModeButtonOptionType = {
  left?: OptionType[];
  right?: OptionType[];
};
type OptionType = {
  // name of the mode
  mode: string;
  position: "top" | "center" | "bottom";
};

type ModeButtonType = {
  // Options to swho on ModeButton
  modeOptions: ModeButtonOptionType;
  // callback function when modebutton clicked
  onClick: MouseEventHandler;
  // current selected mode
  mode: string;
  // set mode
  setMode: (m: string) => void;
  // icon name
  icon: "laundry" | "dryer" | "stop";
};
export default function ModeButton({
  modeOptions,
  onClick,
  mode,
  setMode,
  icon,
}: ModeButtonType) {
  return (
    <div className={styles.modeButtonWrapper}>
      <div className={styles.outerCircle}>
        <div className={styles.modeOptions}>
          {Object.keys(modeOptions).map((key) => {
            const lr = key as keyof ModeButtonOptionType;
            return (
              <div className={styles[lr]}>
                {modeOptions[lr]?.map((option) => (
                  <ModeOption
                    mode={option.mode}
                    currentMode={mode}
                    setMode={setMode}
                    position={`${lr}-${option.position}`}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.innerCircle} onClick={onClick}>
        <img src={LAUNDRY_ICON} />
        <span>{icon === "stop" ? "Stop" : "Start"}</span>
      </div>
    </div>
  );
}

export function ModeButtonTest() {
  const [laundryMode, setLaundryMode] = useState<string>("1");
  const [laundryStart, setLaundryStart] = useState<string>("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#5067AA",
        width: "100%",
        height: "100%",
        padding: 30,
      }}
    >
      <h3>Laundry mode button</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <ModeButton
          onClick={() => setLaundryStart(laundryMode)}
          modeOptions={LAUNDRY_OPTIONS}
          mode={laundryMode}
          setMode={setLaundryMode}
          icon={"laundry"}
        />
        <div>{`start with ${laundryStart}`}</div>
      </div>
      <h3>Dryer mode button</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <ModeButton
          onClick={() => setLaundryStart(laundryMode)}
          modeOptions={DRYER_OPTIONS}
          mode={laundryMode}
          setMode={setLaundryMode}
          icon={"laundry"}
        />
        <div>{`start with ${laundryStart}`}</div>
      </div>
      <h3>Dryer mode button</h3>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <ModeButton
          onClick={() => setLaundryStart(laundryMode)}
          modeOptions={RUNNING_MODE}
          mode={laundryMode}
          setMode={setLaundryMode}
          icon={"laundry"}
        />
        <div>{`start with ${laundryStart}`}</div>
      </div>
    </div>
  );
}

const RUNNING_MODE: ModeButtonOptionType = {
  left: [
    {
      mode: "표준건조",
      position: "center",
    },
  ],
};
const DRYER_OPTIONS: ModeButtonOptionType = {
  left: [
    {
      mode: "표준건조",
      position: "top",
    },
    {
      mode: "강력건조",
      position: "bottom",
    },
  ],
  right: [
    {
      mode: "섬세의류",
      position: "top",
    },
    {
      mode: "10분건조",
      position: "bottom",
    },
  ],
};
const LAUNDRY_OPTIONS: ModeButtonOptionType = {
  left: [
    {
      mode: "표준세탁",
      position: "top",
    },
    {
      mode: "강력세탁",
      position: "center",
    },
    {
      mode: "청정세탁",
      position: "bottom",
    },
  ],
  right: [
    {
      mode: "물/란제리",
      position: "top",
    },
    {
      mode: "합성섬유",
      position: "center",
    },
    {
      mode: "헹굼+탈수",
      position: "bottom",
    },
  ],
};

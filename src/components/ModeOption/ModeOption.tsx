import React, { useState } from "react";
import styles from "./ModeOption.module.scss";
import cn from "classnames";

type ModeOptionTypes = {
  // name of the mode
  mode: string;
  // selected mode
  currentMode: string;
  // callback function to call when button is clicked
  setMode: (mode: string) => void;
  // position of the mode button
  position:
    | "left-top"
    | "left-center"
    | "left-bottom"
    | "right-top"
    | "right-center"
    | "right-bottom";
};
/**
 * The ModeOption component is the option button for laundry / drayer
 */
export default function ModeOption({
  mode,
  currentMode,
  setMode,
  position,
}: ModeOptionTypes) {
  const [lr, tcb] = position.split("-");
  return (
    <div
      key={mode}
      className={cn(styles.modeButtonWrapper, {
        [styles.modeButtonWrapper__right]: lr === "right",
        [styles.modeButtonWrapper__selected]: mode === currentMode,
      })}
    >
      <div
        className={cn(styles.modeButton, {
          [styles.modeButton__top]: tcb === "top",
          [styles.modeButton__bottom]: tcb === "bottom",
          [styles.modeButton__right]: lr === "right",
        })}
        onClick={() => setMode(mode)}
      >
        <span>{mode}</span>
      </div>
      <div className={styles.modeButtonCircle} onClick={() => setMode(mode)} />
    </div>
  );
}

export function ModeOptionTest() {
  const [option, setMode] = useState<string>("표준세탁");
  return (
    <div
      style={{
        background: "#5067AA",
        width: 320,
        height: 340,
      }}
    >
      <ModeOption
        mode={"표준세탁"}
        currentMode={option}
        setMode={setMode}
        position={"right-top"}
      />
      <ModeOption
        mode={"강력세탁"}
        currentMode={option}
        setMode={setMode}
        position={"right-center"}
      />
    </div>
  );
}

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
      className={cn(styles.modeOptionWrapper, {
        [styles.modeOptionWrapper__right]: lr === "right",
        [styles.modeOptionWrapper__selected]: mode === currentMode,
      })}
    >
      <div
        className={cn(styles.optionButton, {
          [styles.optionButton__top]: tcb === "top",
          [styles.optionButton__bottom]: tcb === "bottom",
        })}
        onClick={() => setMode(mode)}
      >
        <span>{mode}</span>
      </div>
      <div className={styles.optionCircle} onClick={() => setMode(mode)} />
    </div>
  );
}

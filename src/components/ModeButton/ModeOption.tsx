import React from "react";
import styles from "./ModeOption.module.scss";
import cn from "classnames";

type ModeOptionTypes = {
  // name of the mode
  mode: string;
  // whether current option is selected or not
  selected: boolean;
  // callback function to click current option button
  optionClicked: () => void;
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
  selected,
  optionClicked,
  position,
}: ModeOptionTypes) {
  const [lr, tcb] = position.split("-");
  return (
    <div
      key={mode}
      className={cn(styles.modeOptionWrapper, {
        [styles.modeOptionWrapper__right]: lr === "right",
        [styles.modeOptionWrapper__selected]: selected,
      })}
    >
      <div
        className={cn(styles.optionButton, {
          [styles.optionButton__top]: tcb === "top",
          [styles.optionButton__bottom]: tcb === "bottom",
        })}
        onClick={optionClicked}
      >
        <span>{mode}</span>
      </div>
      <div className={styles.optionCircle} onClick={optionClicked} />
    </div>
  );
}

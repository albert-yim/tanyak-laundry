import React, { MouseEventHandler, useMemo } from "react";
import styles from "./ModeButton.module.scss";
import ModeOption from "./ModeOption";
import { ReactComponent as DRYER_ICON } from "../../assets/dryer.svg";
import { ReactComponent as LAUNDRY_ICON } from "../../assets/washingMachine.svg";
import { ReactComponent as PAUSE_ICON } from "../../assets/pause.svg";
import { ModeButtonOptionType, OptionType } from "../../types";

type ModeButtonType = {
  // Options to show on ModeButton
  modeOptions: ModeButtonOptionType;
  // callback function when modebutton clicked
  onClick: MouseEventHandler;
  selectedMode: OptionType;
  setSelectedMode: (m: OptionType) => void;
  // icon name
  icon: "washing_machine" | "dryer" | "stop";
};
export default function ModeButton({
  modeOptions,
  onClick,
  selectedMode,
  setSelectedMode,
  icon,
}: ModeButtonType) {
  const typeIcon = useMemo(() => {
    if (icon === "dryer") {
      return <DRYER_ICON width="24" />;
    } else if (icon === "washing_machine") {
      return <LAUNDRY_ICON width="24" />;
    } else {
      return <PAUSE_ICON width="24" />;
    }
  }, [icon]);

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
                    key={option.mode}
                    mode={option.mode}
                    selected={option.mode === selectedMode.mode}
                    optionClicked={() => {
                      setSelectedMode(option);
                    }}
                    position={`${lr}-${option.position}`}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.innerCircle} onClick={onClick}>
        {typeIcon}
        <span>{icon === "stop" ? "정지" : "시작"}</span>
      </div>
    </div>
  );
}

export function ModeButtonTest() {
  return <div>modebutton test</div>;
}

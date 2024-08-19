import React, { MouseEventHandler, useEffect, useState } from "react";
import styles from "./ModeButton.module.scss";
import cn from "classnames";
import ModeOption from "./ModeOption";

type ModeButtonType = {
  // Options to swho on ModeButton
  modeOptions: ModeButtonOptionType;
  // callback function when modebutton clicked
  onClick: MouseEventHandler;
};

type ModeButtonOptionType = {
  left?: OptionType[];
  right?: OptionType[];
};
type OptionType = {
  // name of the mode
  mode: string;
  position: "top" | "center" | "bottom";
  // whether the option is selected or not (default = false)
  selected?: boolean;
};

export default function ModeButton({ modeOptions, onClick }: ModeButtonType) {
  const [mode, setMode] = useState<string>("강력세탁");
  useEffect(() => {
    Object.keys(modeOptions).map((key) => {
      const lr = key as keyof ModeButtonOptionType;
      const selectedOption = modeOptions[lr]?.find(
        (option) => option?.selected,
      );
      if (selectedOption) setMode(selectedOption.mode);
    });
  }, [modeOptions]);

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
      <div className={styles.innerCircle}></div>
    </div>
  );
}

export function ModeButtonTest() {
  const [option, setMode] = useState<string>("표준세탁");
  const LAUNDRY_OPTIONS: ModeButtonOptionType = {
    left: [
      {
        mode: "1",
        position: "top",
      },
      {
        mode: "2",
        position: "center",
      },
      {
        mode: "3",
        position: "bottom",
      },
    ],
    right: [
      {
        mode: "4",
        position: "top",
      },
      {
        mode: "5",
        position: "center",
      },
      {
        mode: "6",
        position: "bottom",
        selected: true,
      },
    ],
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#5067AA",
        width: 320,
        height: 340,
      }}
    >
      <ModeButton
        onClick={() => console.log("cc")}
        modeOptions={LAUNDRY_OPTIONS}
      />
    </div>
  );
}
// <ModeOption
//   mode={"표준세탁"}
//   currentMode={option}
//   setMode={setMode}
//   position={"right-top"}
// />
// <ModeOption
//   mode={"강력세탁"}
//   currentMode={option}
//   setMode={setMode}
//   position={"right-center"}
// />

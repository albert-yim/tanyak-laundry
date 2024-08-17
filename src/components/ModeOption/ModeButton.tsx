import React, { MouseEventHandler, useState } from "react";
import styles from "./ModeButton.module.scss";
import cn from "classnames";
import ModeOption from "./ModeOption";

type ModeButtonType = {
  onClick: MouseEventHandler;
};

export default function ModeButton({ onClick }: ModeButtonType) {
  const [mode, setMode] = useState<string>("강력세탁");
  return (
    <div className={styles.modeButtonWrapper}>
      <div className={styles.outerCircle}>
        <div className={styles.modeOptions}>
          <div className={styles.left}>
            <ModeOption
              mode={"표준세탁"}
              currentMode={mode}
              setMode={setMode}
              position={"left-top"}
            />
            <ModeOption
              mode={"표준세탁"}
              currentMode={mode}
              setMode={setMode}
              position={"left-center"}
            />
            <ModeOption
              mode={"표준세탁"}
              currentMode={mode}
              setMode={setMode}
              position={"left-bottom"}
            />
          </div>
          <div className={styles.right}>
            <ModeOption
              mode={"표준세탁"}
              currentMode={mode}
              setMode={setMode}
              position={"right-top"}
            />
            <ModeOption
              mode={"표준세탁"}
              currentMode={mode}
              setMode={setMode}
              position={"right-center"}
            />
            <ModeOption
              mode={"표준세탁"}
              currentMode={mode}
              setMode={setMode}
              position={"right-bottom"}
            />
          </div>
        </div>
      </div>
      <div className={styles.innerCircle}></div>
    </div>
  );
}

export function ModeButtonTest() {
  const [option, setMode] = useState<string>("표준세탁");
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
      <ModeButton onClick={() => console.log("cc")} />
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

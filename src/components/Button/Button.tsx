import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

export type ButtonTypes = {
  onClick: () => void;
  children: ReactNode;
};

export default function Button({ children, onClick }: ButtonTypes) {
  return (
    <button className={styles.buttonWrapper} onClick={onClick}>
      {children}
    </button>
  );
}

export function ButtonTest(){
  return(
    <div style={{ width: 322, height: 48 }}>
      <Button
        children="로그인"
        onClick={() => console.log("button clicked")}
      />
    </div>
  );
}


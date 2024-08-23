import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./BasicButton.module.scss";

export type ButtonTypes = {
  onClick: () => void;
  children: ReactNode;
};

function BasicButton({ children, onClick }: ButtonTypes) {
  return (
    <button className={styles.basicButtonWrapper} onClick={onClick}>
      {children}
    </button>
  );
}

export default BasicButton;

import React, { MouseEventHandler, ReactNode } from "react";
import "./BasicButton.scss";

export type ButtonTypes = {
  onClick: () => void;
  children: ReactNode;
};

function BasicButton({ children, onClick }: ButtonTypes) {
  return (
    <button className="basicButtonWrapper" onClick={onClick}>
      {children}
    </button>
  );
}

export default BasicButton;

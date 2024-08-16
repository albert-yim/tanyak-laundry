import React from "react";
import "./BasicButton.scss";

export type ButtonTypes = {
  name: string;
  onClick?: any;
};

interface ButtonProps extends ButtonTypes {
  onClick?: () => void;
}

function BasicButton({ name, onClick }: ButtonProps) {
  return (
    <button className="basicButtonWrapper" onClick={onClick}>
      {name}
    </button>
  );
}

export default BasicButton;

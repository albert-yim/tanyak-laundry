import React from "react";
import "./BasicButton.scss";

function BasicButton({ name }: { name: string }) {
  return <button className="basicButtonWrapper">{name}</button>;
}

export default BasicButton;

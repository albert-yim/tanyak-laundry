//PlaceHolder, Value, Setvalue
//아래 밑줄 위치 등등

import React from "react";
import styles from "./TextField.module.scss";

export type TextFieldProps = {
  placeholder: string;
  variable: string;
  setValue: (variable: string) => void;
};

export default function TextField({
  placeholder,
  variable,
  setValue,
}: TextFieldProps) {
  return (
    <div className={styles.textFieldWrapper}>
      <input placeholder={placeholder} variable={variable} />
    </div>
  );
}

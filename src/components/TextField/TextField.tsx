//PlaceHolder, Value, Setvalue
//아래 밑줄 위치 등등

import React, { useState } from "react";
import styles from "./TextField.module.scss";

export type TextFieldProps = {
  placeholder: string;
};

export default function TextField({ placeholder }: TextFieldProps) {
  const [value, setValue] = useState<string>("");
  return (
    <div className={styles.textFieldWrapper}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

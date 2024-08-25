//PlaceHolder, Value, Setvalue
//아래 밑줄 위치 등등

import React, { useState } from "react";
import styles from "./Input.module.scss";

export type InputProps = {
  placeholder: string;
  value: string;
  setValue: (s: string) => void;
};

export default function Input({ placeholder, value, setValue }: InputProps) {
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

export function InputTEST(){
  
}
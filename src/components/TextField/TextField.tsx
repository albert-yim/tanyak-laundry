//PlaceHolder, Value, Setvalue
//아래 밑줄 위치 등등

import React from "react"
import "./TextField.scss"

export type TextFieldProps = {
  placeholder: string
  value: string
  setValue: (value: string) => void
}

export default function TextField({ placeholder, value, setValue }: TextFieldProps) {
  return (
    <div className="textFieldWrapper">
      <input
        className="textField"
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}


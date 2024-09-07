import React, { useState } from "react";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ReactComponent as LOGOICON } from "../../assets/logo.svg";

export default function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <div className={styles.loginWrapper}>
      <LOGOICON />
      <span className={styles.text}>더욱 간단해진 /n 탄약중대 세탁 시스템</span>
      <div className={styles.inputWrapper}>
        <Input placeholder="이름" value={name} setValue={setName} />
        <Input placeholder="군번" value={number} setValue={setNumber} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          children="로그인"
          onClick={() => console.log("button clicked")}
        />
      </div>
    </div>
  );
}

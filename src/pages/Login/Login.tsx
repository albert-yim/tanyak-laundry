import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ReactComponent as LOGOICON } from "../../assets/logo.svg";
import { signInWithId, signUpWithUserData } from "../../api";

export default function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userClass, setUserClass] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const loginButtonClicked = async () => {
    if (number === "") {
      //should handle error
      console.log("empty number");
      return;
    }

    if (isSignUp) {
      //should show someting to indicate signUp
      signUpWithUserData({
        serviceId: number,
        name,
        class: userClass,
        rank: "병장",
        serviceStartedAt: "20230320T0000",
      });
      return;
    }

    const { error } = await signInWithId(number);
    if (error) {
      setIsSignUp(true);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <LOGOICON />
      <span className={styles.text}>
        더욱 간단해진
        <br />
        탄약중대 세탁 시스템
      </span>
      <div className={styles.inputWrapper}>
        <Input placeholder="군번" value={number} setValue={setNumber} />
        {isSignUp ? (
          <>
            <Input placeholder="이름" value={name} setValue={setName} />
            <Input
              placeholder="기수"
              value={userClass}
              setValue={setUserClass}
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={loginButtonClicked}>로그인</Button>
      </div>
    </div>
  );
}

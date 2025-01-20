import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Button, Input } from "@components";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { signInWithId, signUpWithUserData } from "@api";

export default function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userClass, setUserClass] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const loginButtonClicked = async () => {
    const numberRegex = /^[0-9]{2}(-)[0-9]{8}$/;
    const nameRegex = /^[가-힣]$/;
    const userClassRegex = /[^0-9]$/;

    if (number === "" || !numberRegex.test(number)) {
      //should handle error
      alert("군번을 적어주세요!");
      return;
    } else if (name === "" || !nameRegex.test(name)) {
      alert("이름을 적어주세요!");
    } else if (userClass === "" || !userClassRegex.test(userClass)) {
      alert("기수를 적어주세요!");
    }

    if (isSignUp) {
      //should show someting to indicate signUp
      signUpWithUserData({
        service_id: number,
        name,
        class: userClass,
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

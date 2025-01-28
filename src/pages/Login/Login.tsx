import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { Button, Input, AlertModal } from "@components";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { signInWithId, signUpWithUserData } from "@src/api";
import { motion } from "framer-motion";

export default function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userClass, setUserClass] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [validProb, setValidProb] = useState(0);
  const [alertModalVisible, setAlertModalVisible] = useState(false);

  const loginButtonClicked = async () => {
    //regex for input validation
    const numberRegex = /^[0-9]{2}(-)[0-9]{8}$/;
    const nameRegex = /^[가-힣]{1,10}$/;
    const userClassRegex = /^[0-9]{1,4}$/;

    //checking input validation
    if (number === "" || !numberRegex.test(number)) {
      console.log(validProb);
      setValidProb(1);
      setAlertModalVisible(true);
      return null;
    }

    if (isSignUp) {
      if (name === "" || !nameRegex.test(name)) {
        setValidProb(2);
        setAlertModalVisible(true);
        return null;
      } else if (userClass === "" || !userClassRegex.test(userClass)) {
        setValidProb(3);
        setAlertModalVisible(true);
        return null;
      }
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.loginWrapper}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.logoWrapper}
      >
        <LOGOICON width="250px" height="250px" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={styles.text}
      >
        더욱 간단해진
        <br />
        탄약중대 세탁 시스템
      </motion.span>
      {validProb === 1 ? (
        <AlertModal
          visible={alertModalVisible}
          title="군번을 입력해주세요!"
          detail="예) 00-00000000"
          onClose={() => setAlertModalVisible(false)}
        />
      ) : validProb === 2 ? (
        <AlertModal
          visible={alertModalVisible}
          title="이름을 입력해주세요!"
          detail="예) 김공군"
          onClose={() => setAlertModalVisible(false)}
        />
      ) : validProb === 3 ? (
        <AlertModal
          visible={alertModalVisible}
          title="기수를 입력해주세요!"
          detail="예) 800"
          onClose={() => setAlertModalVisible(false)}
        />
      ) : null}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={styles.inputWrapper}
      >
        <Input placeholder="군번" value={number} setValue={setNumber} />
        {isSignUp ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={styles.extraInputWrapper}
          >
            <Input placeholder="이름" value={name} setValue={setName} />
            <Input
              placeholder="기수"
              value={userClass}
              setValue={setUserClass}
            />
          </motion.div>
        ) : (
          <></>
        )}
      </motion.div>
      <motion.div
        className={styles.buttonWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      >
        <Button onClick={loginButtonClicked}>로그인</Button>
      </motion.div>
    </motion.div>
  );
}

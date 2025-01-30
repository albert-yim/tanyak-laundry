import React from "react";
import styles from "./Faq.module.scss";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { Accordian } from "@components";

export default function Faq() {
  const questionList = [
    {
      question: "앱을 다운로드 하고 싶어요",
      answer: "하하하",
    },
    {
      question: "알림이 안떠요",
      answer: "앱을 다시 설치해보세요",
    },
    {
      question: "누가 앱을 만들었나요?",
      answer: "846기 임찬양과 851기 김건중이 만들어써요",
    },
  ];
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.logoWrapper}>
        <LOGOICON width="250px" height="250px" />
      </div>
      <div>자주 묻는 질문</div>
      <div>v 1.3.0</div>
      <Accordian questionList={questionList} />
    </div>
  );
}

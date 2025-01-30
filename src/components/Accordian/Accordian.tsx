import React from "react";
import styles from "./Accordian.module.scss";
import QuestionSection from "./QuestionSection";

type questionList = {
  question: string;
  answer: string;
};

export default function Accordian({
  questionList,
}: {
  questionList: questionList[];
}) {
  return (
    <div className={styles.accordianWrapper}>
      {questionList.map((questionContent) => (
        <QuestionSection questionContent={questionContent} />
      ))}
    </div>
  );
}

export function AccordianTest() {
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
    <div>
      <Accordian questionList={questionList} />
    </div>
  );
}

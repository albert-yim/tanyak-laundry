import React, { useState } from "react";
import styles from "./QuestionSection.module.scss";
import { ReactComponent as DOWNARROW_ICON } from "@assets/downArrow.svg";

export default function QuestionSection({ questionContent }: any) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  return (
    <div className={styles.questionSectionWrapper}>
      <div
        className={styles.questionWrapper}
        onClick={() => setIsAnswerVisible(!isAnswerVisible)}
      >
        {questionContent.question}
        <DOWNARROW_ICON width="20px" height="auto" />
      </div>
      {isAnswerVisible ? (
        <div className={styles.answerWrapper}>{questionContent.answer}</div>
      ) : null}
    </div>
  );
}

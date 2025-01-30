import React from "react";
import styles from "./QuestionSection.module.scss";

export default function QuestionSection({ questionContent }: any) {
  return (
    <div className={styles.questionSectionWrapper}>
      <div className={styles.questionWrapper}>{questionContent.question}</div>
      <div className={styles.answerWrapper}>{questionContent.answer}</div>
    </div>
  );
}

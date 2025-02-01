import React, { useState } from "react";
import styles from "./QuestionSection.module.scss";
import { ReactComponent as DOWNARROW_ICON } from "@assets/downArrow.svg";

export type QuestionSectionType = {
  question: string;
  answer: string;
  image: string[];
};

export default function QuestionSection({
  question,
  answer,
  image,
}: QuestionSectionType) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  console.log(image);
  const answerImgList = image.map((link) => (
    <img src={link} alt="answerImage" />
  ));
  return (
    <div className={styles.questionSectionWrapper}>
      <div
        className={styles.questionWrapper}
        onClick={() => setIsAnswerVisible(!isAnswerVisible)}
      >
        {question}

        <DOWNARROW_ICON width="20px" height="auto" />
      </div>
      {isAnswerVisible ? (
        <div className={styles.answerWrapper}>
          {answer}
          {answerImgList}
        </div>
      ) : null}
    </div>
  );
}

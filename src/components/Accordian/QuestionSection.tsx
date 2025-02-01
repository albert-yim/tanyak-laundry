import React from "react";
import styles from "./QuestionSection.module.scss";
import { ReactComponent as DOWNARROW_ICON } from "@assets/downArrow.svg";
import { ReactComponent as UPARROW_ICON } from "@assets/upArrow.svg";

export type QuestionSectionType = {
  question: string;
  answer: string;
  image: string[];
};

type QuestionSectionClickType = {
  id: number;
  onClick: () => void;
  isVisible: boolean;
};

export default function QuestionSection({
  id,
  onClick,
  isVisible,
  question,
  answer,
  image,
}: QuestionSectionClickType & QuestionSectionType) {
  const answerImgList = image.map((link) => (
    <img src={link} width="100%" alt="answerImage" />
  ));
  return (
    <div id={`QuestionSection-${id}`} className={styles.questionSectionWrapper}>
      <div className={styles.questionWrapper} onClick={onClick}>
        {question}
        {isVisible ? (
          <UPARROW_ICON width="20px" height="20px" />
        ) : (
          <DOWNARROW_ICON width="20px" height="20px" />
        )}
      </div>
      {isVisible ? (
        <div className={styles.answerWrapper}>
          {answer}
          {answerImgList}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

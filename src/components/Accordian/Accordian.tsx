import React from "react";
import styles from "./Accordian.module.scss";
import QuestionSection from "./QuestionSection";
import { QuestionSectionType } from "./QuestionSection";

type AccordianType = {
  questionList: QuestionSectionType[];
};

export default function Accordian({ questionList }: AccordianType) {
  return (
    <div className={styles.accordianWrapper}>
      {questionList.map((questionContent) => (
        <QuestionSection
          question={questionContent.question}
          answer={questionContent.answer}
          image={questionContent.image}
        />
      ))}
    </div>
  );
}

export function AccordianTest() {
  const questionList = [
    {
      question: "앱을 다운로드 하고 싶어요",
      answer: `아이폰\n
      1. 카카오톡 링크에 방문 후 Safari로 열기\n
      2. 조수 표시줄에서 공유를 탭\n
      3. 홈 화면에 추가를 찾아서 탭\n
      4. 웹사이트 세부정보를 확인하거나 수정하고 추가를 탭\n\n
      
      갤럭시\n
      1. 카카오톡 링크에 방문 후 다른 브라우저(삼성 브라우저)로 열기\n
      2. 우측 상단에 다운로드 버튼 클릭\n
      `,
      image: [
        "https://drive.google.com/file/d/14d_OJxcJ0S8Cu5neaw9mbGatVkv5hg6F/view?usp=sharing",
        "https://drive.google.com/file/d/1NNWHH1S519fjhxL7ZKtjppeP4wZKHcug/view?usp=sharing",
      ],
    },
    {
      question: "알림이 안떠요",
      answer: "앱을 다시 설치해보세요",
      image: [],
    },
    {
      question: "누가 앱을 만들었나요?",
      answer: "846기 임찬양과 851기 김건중이 만들어써요",
      image: [],
    },
  ];

  return (
    <div>
      <Accordian questionList={questionList} />
    </div>
  );
}

import React, { useState } from "react";
import styles from "./Accordian.module.scss";
import QuestionSection from "./QuestionSection";
import { QuestionSectionType } from "./QuestionSection";

type AccordianType = {
  questionList: QuestionSectionType[];
};

export default function Accordian({ questionList }: AccordianType) {
  const [activeId, setActiveId] = useState<number | null>(null);
  //function to set activeId as null if opened or as id if closed
  function handleToggle(id: number) {
    setActiveId((prevId) => (prevId === id ? null : id));
  }
  return (
    <div className={styles.accordianWrapper}>
      {questionList.map((questionContent, index) => (
        <QuestionSection
          id={index}
          onClick={() => handleToggle(index)}
          isVisible={activeId === index}
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
      4. 웹사이트 세부정보를 확인하거나 수정하고 추가를 탭\n
      
      갤럭시\n
      1. 카카오톡 링크에 방문 후 다른 브라우저(삼성 브라우저)로 열기\n
      2. 우측 상단에 다운로드 버튼 클릭\n
      `,
      image: [
        "https://blogger.googleusercontent.com/img/a/AVvXsEirmY6jerPZSgry1_JoBrnMcJWgPaTDtCczkOPL6VcCgAjPWSqgVINWwnvX6I9bTd-9P7-VG-X7Jf2JTQpmxaOWhnp6dQEwOvII2FrpxkjfY3ddzRC6ugvhVhJva0BdOCiIHMhqMtVQK7E0-MJhIrj9iNCUzM5bRyoBBE_qOLWlGevDhBJveHq0ixdAMOPG",
        "https://blogger.googleusercontent.com/img/a/AVvXsEgThWozCdMxBt3ZacahLDIszp4fqmV33JfwWwoTAIE4WlNNqOOVfhDJyV71co52m1TU39iDHu_Re5-t2ymWPkqT1EkETvsCiwYjIwpdsxg0xzEFEGa1loLa5YfRULImnFtDW6-Imby1O6Oacx5q5OAEiy3kr9CzrNIcUKt2yDnxfwKhW2jbCb3wKmrs8gt1",
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

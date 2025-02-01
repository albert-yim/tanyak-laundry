import React from "react";
import styles from "./Faq.module.scss";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { Accordian } from "@components";

export default function Faq() {
  const questionList = [
    {
      question: "앱을 다운로드 하고 싶어요",
      answer: `아이폰
      1. 카카오톡 링크에 방문 후 Safari로 열기
      2. 조수 표시줄에서 공유를 탭
      3. 홈 화면에 추가를 찾아서 탭
      4. 웹사이트 세부정보를 확인하거나 수정하고 추가를 탭
      
      갤럭시
      1. 카카오톡 링크에 방문 후 다른 브라우저(삼성 브라우저)로 열기
      2. 우측 상단에 다운로드 버튼 클릭
      `,
      image: "",
    },
    {
      question: "알림이 안떠요",
      answer: "앱을 다시 설치해보세요",
      image: "",
    },
    {
      question: "누가 앱을 만들었나요?",
      answer: "846기 임찬양과 851기 김건중이 만들어써요",
      image: "",
    },
  ];
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.logoWrapper}>
        <LOGOICON width="250px" height="250px" />
      </div>
      <div>자주 묻는 질문</div>
      <div>v 1.3.0</div>
    </div>
  );
}

import React from "react";
import styles from "./Faq.module.scss";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { ReactComponent as CLOSE_ICON } from "@assets/close.svg";
import { Accordian } from "@components";
import { useNavigate } from "react-router-dom";

export default function Faq() {
  const navigate = useNavigate();
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
      question: "누가 앱을 만들었나요?",
      answer: "846기 임찬양과 851기 김건중이 만들어써요",
      image: [],
    },
  ];
  return (
    <div className={styles.faqWrapper}>
      <div className={styles.closeButton} onClick={() => navigate("/")}>
        <CLOSE_ICON />
      </div>
      <div className={styles.logoWrapper}>
        <LOGOICON width="250px" height="250px" />
      </div>
      <div className={styles.titleWrapper}>자주 묻는 질문</div>
      <div className={styles.accordianWrapper}>
        <Accordian questionList={questionList} />
      </div>
      <div className={styles.versionWrapper}>v 1.3.0</div>
    </div>
  );
}

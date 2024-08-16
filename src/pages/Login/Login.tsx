import React from "react";

import BasicButton from "../../components/BasicButton/BasicButton";

export default function Login() {
  let buttonClick = () => console.log("button clicked");
  return (
    <div className="App">
      <header className="App-header">Login Page</header>
      <div style={{ width: 322, height: 48 }}>
        <BasicButton name="로그인" onClick={buttonClick} />
      </div>
    </div>
  );
}

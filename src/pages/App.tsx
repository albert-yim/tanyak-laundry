import React from "react";
import "./App.scss";
import BasicButton from "../components/BasicButton/BasicButton";

function App() {
  let buttonClick = () => console.log("button clicked");
  return (
    <div className="App">
      <header className="App-header">Hello Tanyak Laundry 3 with scss</header>
      <div style={{ width: 322, height: 48 }}>
        <BasicButton name="로그인" onClick={buttonClick} />
      </div>
    </div>
  );
}

export default App;

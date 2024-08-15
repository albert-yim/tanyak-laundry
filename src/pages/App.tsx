import React from "react";
import "./App.scss";
import BasicButton from "../components/BasicButton/BasicButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello Tanyak Laundry 3 with scss</header>
      <div style={{ width: 300 }}>
        <BasicButton name="로그인" />
      </div>
    </div>
  );
}

export default App;

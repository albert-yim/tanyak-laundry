import React, { useState } from "react";
import BasicButton from "../../components/BasicButton/BasicButton";
import TextField from "../../components/TextField/TextField";

type Components = "button" | "modebutton" | "textfield";
export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] =
    useState<Components>("button");
  const COMPONENT_LIST: Components[] = ["button", "modebutton", "textfield"];

  const renderComponent = () => {
    switch (selectedComponent) {
      case "modebutton":
        return <div> mode button test</div>;
      case "button":
        return (
          <div style={{ width: 322, height: 48 }}>
            <BasicButton
              children="로그인"
              onClick={() => console.log("button clicked")}
            />
          </div>
        );
      case "textfield":
        return (
          <div>
            <TextField placeholder="이름" />
          </div>
        );
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "10px" }}
      >
        <h3>Components</h3>
        <ul>
          {COMPONENT_LIST.map((component) => (
            <div
              style={{
                cursor: "pointer",
                marginBottom: "20px",
                padding: 10,
                borderRadius: 8,
                background:
                  selectedComponent === component ? "yellow" : "transparent",
              }}
              onClick={() => setSelectedComponent(component)}
            >
              {component}
            </div>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>{renderComponent()}</div>
    </div>
  );
}

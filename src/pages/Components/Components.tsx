import React, { useState } from "react";
import { ButtonTest } from "../../components/Button/Button";
import { LaunDryerButtonTest } from "../../components/LaunDryerButton/LaunDryerButton";
import { InputTest } from "../../components/Input/Input";
import { ModalTest } from "../../components/Modal/Modal";
import { ModeButtonTest } from "../../components/ModeButton/ModeButton";

type Components =
  | "button"
  | "modebutton"
  | "input"
  | "modal"
  | "laundryerButton";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] =
    useState<Components>("modal");
  const COMPONENT_LIST: Components[] = [
    "button",
    "modebutton",
    "input",
    "modal",
    "laundryerButton",
  ];
  const renderComponent = () => {
    switch (selectedComponent) {
      case "modebutton":
        return <ModeButtonTest />;
      case "laundryerButton":
        return <LaunDryerButtonTest />;
      case "button":
        return <ButtonTest />;
      case "input":
        return <InputTest />;
      case "modal":
        return <ModalTest />;
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
                  selectedComponent === component ? "#5067aa" : "transparent",
              }}
              onClick={() => setSelectedComponent(component)}
            >
              {component}
            </div>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: "20px", background: "#5067aa" }}>
        {renderComponent()}
      </div>
    </div>
  );
}

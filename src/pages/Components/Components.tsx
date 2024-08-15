import React, { useState } from "react";

type Components = "button" | "modebutton";
export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] =
    useState<Components>("button");
  const COMPONENT_LIST: Components[] = ["button", "modebutton"];

  const renderComponent = () => {
    switch (selectedComponent) {
      case "modebutton":
        return <div> mode button test</div>;
      case "button":
        return <div> basic button test</div>;
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

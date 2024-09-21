import React, { useState, useEffect } from "react";
import { ButtonTest } from "../../components/Button/Button";
import { LaunDryerButtonTest } from "../../components/LaunDryerButton/LaunDryerButton";
import { InputTest } from "../../components/Input/Input";
import { ModalTest } from "../../components/Modal/Modal";
import { ModeButtonTest } from "../../components/ModeButton/ModeButton";
import { CarouselTest } from "../../components/Carousel/Carousel";
import { supabase } from "../../supabase";
import {
  fetchDryerModes,
  fetchModes,
  fetchWasherModes,
  fetchWashingMachineHistory,
  insertUsageHistory,
} from "../../api";
import { UsageHistory } from "../../types/Appliance";

type Components =
  | "button"
  | "modebutton"
  | "input"
  | "modal"
  | "laundryerButton"
  | "carousel";

export default function ComponentsPage() {
  const getDB = async () => {
    // const mode = await fetchModes();
    const washerMode = await fetchWasherModes();
    const dryerMode = await fetchDryerModes();
    const washer = await fetchWashingMachineHistory();
    // console.log(mode);
    console.log(washerMode);
    console.log(dryerMode);
    console.log(washer);
  };
  useEffect(() => {
    getDB();
  }, []);
  const [selectedComponent, setSelectedComponent] =
    useState<Components>("carousel");
  const COMPONENT_LIST: Components[] = [
    "button",
    "modebutton",
    "input",
    "modal",
    "laundryerButton",
    "carousel",
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
      case "carousel":
        return <CarouselTest />;
    }
  };

  function insertWasher() {
    const data: Omit<UsageHistory, "created_at"> = {
      user_id: "23-70006795",
      mode_id: 1,
      appliance_id: 1,
      end_at: "20240921T2326",
    };
    insertUsageHistory(data);
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ width: "200px", backgroundColor: "#f4f4f4", padding: "10px" }}
      >
        <button onClick={() => insertWasher()}>test</button>
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

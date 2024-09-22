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
  fetchWashingMachineModes,
  insertUsageHistory,
  fetchAppliances,
} from "../../api";
import { UsageHistoryInsertPayload } from "../../types";

type Components =
  | "button"
  | "modebutton"
  | "input"
  | "modal"
  | "laundryerButton"
  | "carousel"
  | "apis";

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] =
    useState<Components>("carousel");
  const COMPONENT_LIST: Components[] = [
    "button",
    "modebutton",
    "input",
    "modal",
    "laundryerButton",
    "carousel",
    "apis",
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
      case "apis":
        return <ApiTest />;
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

function ApiTest() {
  const insertHistory = () => {
    const data: UsageHistoryInsertPayload = {
      user_id: "23-70006795",
      mode_id: 1,
      appliance_id: 1,
      end_at: "20240921T2326",
    };
    insertUsageHistory(data);
    console.log("===================================");
    alert("Success to Insert UsageHistory ");
  };

  const getAppliances = async () => {
    const data = await fetchAppliances();
    console.log("===================================");
    console.log(data);
    alert("Success to fetch Appliance (see the console)");
  };
  const getWashingMachineModes = async () => {
    const mode = await fetchWashingMachineModes();
    console.log("===================================");
    console.log(mode);
    alert("Success to fetch washer modes(see the console)");
  };
  const getDryerModes = async () => {
    const mode = await fetchDryerModes();
    console.log("===================================");
    console.log(mode);
    alert("Success to fetch dryer modes (see the console)");
  };
  return (
    <div>
      <div>
        <h1>Fetch appliance </h1>
        <button onClick={getAppliances}>fetch Appliance</button>
      </div>
      <div>
        <h1>Fetch WashingMachine Modes </h1>
        <button onClick={getWashingMachineModes}>fetch Appliance</button>
      </div>
      <div>
        <h1>Fetch Dryer Modes </h1>
        <button onClick={getDryerModes}>fetch Appliance</button>
      </div>
      <div>
        <h1>Insert UsageHistory</h1>
        <h4>
          Test Data: user_id:1, appliance_id: 1, mode_id:1, end_at:
          "20240921T2326"
        </h4>
        <button onClick={insertHistory}>Insert UsageHistory</button>
      </div>
    </div>
  );
}

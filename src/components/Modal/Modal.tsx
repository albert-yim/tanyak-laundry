import React, { useState, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CLOSE_ICON } from "../../assets/close.svg";
import ModeButton from "../ModeButton/ModeButton";

export type ModalTypes = {
  onClose: () => void;
  children?: ReactNode;
  visible: boolean;
};

export default function Modal({ visible, children, onClose }: ModalTypes) {
  if (!visible) return <></>;
  const [laundryMode, setLaundryMode] = useState<string>(
    LAUNDRY_OPTIONS?.left?.[0].mode || "",
  );
  const [laundryStart, setLaundryStart] = useState<string>("");
  return (
    <>
      <div className={styles.modalBackground} />
      <div className={styles.modalWrapper}>
        <div className={styles.closeButton} onClick={onClose}>
          <CLOSE_ICON />
        </div>
        {children}
      </div>
    </>
  );
}

export function ModalTest() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </div>
  );
}

const DRYER_OPTIONS: any = {
  left: [
    {
      mode: "표준건조",
      position: "top",
    },
    {
      mode: "강력건조",
      position: "bottom",
    },
  ],
  right: [
    {
      mode: "섬세의류",
      position: "top",
    },
    {
      mode: "10분건조",
      position: "bottom",
    },
  ],
};
const LAUNDRY_OPTIONS: any = {
  left: [
    {
      mode: "표준세탁",
      position: "top",
    },
    {
      mode: "강력세탁",
      position: "center",
    },
    {
      mode: "청정세탁",
      position: "bottom",
    },
  ],
  right: [
    {
      mode: "물/란제리",
      position: "top",
    },
    {
      mode: "합성섬유",
      position: "center",
    },
    {
      mode: "헹굼+탈수",
      position: "bottom",
    },
  ],
};

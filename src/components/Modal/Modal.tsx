import React, { useState, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CLOSEICON } from "../../assets/close.svg";

export type ModalTypes = {
  onClose: () => void;
  children?: ReactNode;
};

export default function LaundryModal({ children, onClose }: ModalTypes) {
  return (
    <>
      <div className={styles.modalBackground} />
        <div className={styles.modalWrapper}>
          <div className={styles.closeButton} onClick={onClose}>
            <CLOSEICON />
          </div>
          {children}
        </div>
    </>
  );
}

export function ModalTest() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button onClick={() => setModal(true)}>Open Modal</button>
      {modal === true ? <LaundryModal onClose={() => setModal(false)} /> : null}
    </div>
  );
}

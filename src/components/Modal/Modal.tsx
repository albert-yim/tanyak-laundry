import React, { useState, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CLOSE_ICON } from "@assets/close.svg";
import { motion, AnimatePresence } from "framer-motion";

export type ModalTypes = {
  onClose: () => void;
  children?: ReactNode;
  visible: boolean;
  modalWidth?: string;
  modalHeight?: string;
};

export default function Modal({
  visible,
  children,
  modalWidth,
  modalHeight,
  onClose,
}: ModalTypes) {
  if (!visible) return <></>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{
        opacity: 0,
      }}
    >
      <div className={styles.modalBackground}></div>
      <div
        className={styles.modalWrapper}
        style={{ width: modalWidth || "323px", height: modalHeight || "140px" }}
      >
        <div className={styles.closeButton} onClick={onClose}>
          <CLOSE_ICON />
        </div>
        <div className={styles.contents}>{children}</div>
      </div>
    </motion.div>
  );
}

export function ModalTest() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <AnimatePresence initial={false}>
        {modalVisible && (
          <Modal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

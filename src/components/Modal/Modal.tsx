import React, { useState, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as CLOSE_ICON } from "@assets/close.svg";
import { motion, AnimatePresence } from "framer-motion";

export type ModalTypes = {
  onClose: () => void;
  children?: ReactNode;
  visible: boolean;
};

export default function Modal({ visible, children, onClose }: ModalTypes) {
  if (!visible) return <></>;
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        exit={{ opacity: 0, transition: { duration: 3 } }}
        className={styles.modalBackground}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className={styles.modalWrapper}
      >
        <div className={styles.closeButton} onClick={onClose}>
          <CLOSE_ICON />
        </div>
        <div className={styles.contents}>{children}</div>
      </motion.div>
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

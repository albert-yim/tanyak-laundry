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
      <div className={styles.modalBackground}></div>
      <div className={styles.modalWrapper}>
        <div className={styles.closeButton} onClick={onClose}>
          <CLOSE_ICON />
        </div>
        <div className={styles.contents}>{children}</div>
      </div>
    </>
  );
}

export function ModalTest() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Open Modal</button>
      <AnimatePresence initial={false}>
        {modalVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{
              opacity: 0,
            }}
          >
            <Modal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

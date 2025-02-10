import React, { useState } from "react";
import styles from "./alertModal.module.scss";
import Modal from "../Modal/Modal";

export type AlertModalTypes = {
  visible: boolean;
  title: string;
  detail: string;
  onClose: () => void;
};

export default function AlertModal({
  visible,
  title,
  detail,
  onClose,
}: AlertModalTypes) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleTextWrapper}>{title}</div>
        <div className={styles.detailTextWrapper}>{detail}</div>
      </div>
    </Modal>
  );
}

export function AlertModalTest() {
  const [alertModalVisible, setAlertModalVisible] = useState(false);
  return (
    <>
      <button onClick={() => setAlertModalVisible(true)}>
        Open AlertModal
      </button>
      <AlertModal
        visible={alertModalVisible}
        title="이름을 입력해주세요!"
        detail="예) 김공군"
        onClose={() => setAlertModalVisible(false)}
      />
    </>
  );
}

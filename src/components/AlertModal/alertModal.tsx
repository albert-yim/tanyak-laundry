import React, { useState } from "react";
import Modal from "../Modal/Modal";

export type AlertModalTypes = {
  title: string;
  text: string;
};

export default function AlertModal(title, detail) {
  return <></>;
}

export function AlertModalTest() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <button onClick={() => setModalVisible(true)}>Open AlertModal</button>
      {modalVisible && <AlertModal title="제목" detail="설명설명설명" />}
    </>
  );
}

import React from "react";
import styles from "./Loading.module.scss";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <LOGOICON />
      </motion.div>
    </div>
  );
}

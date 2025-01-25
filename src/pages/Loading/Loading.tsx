import React from "react";
import styles from "./Loading.module.scss";
import { ReactComponent as LOGOICON } from "@assets/logo.svg";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <LOGOICON width="250px" height="250px" />
      </motion.div>
    </div>
  );
}

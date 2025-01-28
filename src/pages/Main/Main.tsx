import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { Appliance, User } from "@src/types";
import { fetchAppliances } from "@src/api";
import { ModeModal, Carousel, ApplianceButton, AlertModal } from "@components";
import { requestForToken } from "@src/firebase";
import { ReactComponent as REFRESH_ICON } from "@assets/refresh.svg";
import { motion, AnimatePresence } from "framer-motion";

type MainType = {
  user: User;
};

export default function Main({ user }: MainType) {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedAppliance, setSelectedAppliance] = useState<Appliance | null>(
    null
  );
  const [alertModalVisible, setAlertModalVisible] = useState(false);

  useEffect(() => {
    //get appliances at first and set fcm device token
    if (user && !appliances.length) {
      getAppliances();
      requestForToken(user.id);
    }
  }, [user, appliances]);

  const getAppliances = () => {
    // rearrage appliances
    const rearrangeAppliances = (apps: Appliance[]) => {
      const washingMachines = apps
        .filter((a) => a.type === "washing_machine")
        .sort((a, b) => a.location - b.location);
      const dryers = apps
        .filter((a) => a.type === "dryer")
        .sort((a, b) => a.location - b.location);
      return [
        ...dryers.slice(0, 2),
        ...washingMachines.slice(0, 2),
        ...dryers.slice(2, 4),
        ...washingMachines.slice(2, 4),
      ];
    };

    // fetch appliances
    fetchAppliances().then((appliances) => {
      setAppliances(rearrangeAppliances(appliances));
    });
  };

  const FirstSlide = (
    <div key={"carousel-firstSlide"} className={styles.machineWrapper}>
      {appliances.slice(0, 4).map((appliance) => (
        <ApplianceButton
          key={`${appliance.type}-${appliance.location}`}
          onClick={() => setSelectedAppliance(appliance)}
          type={appliance.type}
          location={appliance.location}
          lastUsage={appliance.lastUsage}
        />
      ))}
    </div>
  );

  const SecondSlide = (
    <div key={"carousel-secondSlide"} className={styles.machineWrapper}>
      {appliances.slice(4, 8).map((appliance) => (
        <ApplianceButton
          key={`${appliance.type}-${appliance.location}`}
          onClick={() => setSelectedAppliance(appliance)}
          type={appliance.type}
          location={appliance.location}
          lastUsage={appliance.lastUsage}
        />
      ))}
    </div>
  );

  const SLIDES = [FirstSlide, SecondSlide];

  return (
    <div className={styles.mainWrapper}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={styles.mainText}
      >
        {user.name}님 환영합니다
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.carouselWrapper}
      >
        <Carousel contents={SLIDES} />
      </motion.div>

      <AnimatePresence>
        {selectedAppliance && (
          <ModeModal
            user={user}
            visible={!!selectedAppliance}
            appliance={selectedAppliance}
            onClose={(refetch: boolean) => {
              //get Appliances from backend when refetch=true
              if (refetch) getAppliances();
              setSelectedAppliance(null);
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={styles.refreshButtonWrapper}
        onClick={() => window.location.reload()}
      >
        <REFRESH_ICON />
      </motion.div>

      <AlertModal
        visible={alertModalVisible}
        title="궁금한 점이 생겼나요?"
        detail="846기 임찬양과 851기 김건중에게 연락주세요!"
        onClose={() => setAlertModalVisible(false)}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={styles.versionTextWrapper}
        onClick={() => setAlertModalVisible(true)}
      >
        <p>v 1.2.0</p>
      </motion.div>
    </div>
  );
}

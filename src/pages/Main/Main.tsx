import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { Appliance, User } from "@src/types";
import { fetchAppliances } from "@src/api";
import { ModeModal, Carousel, ApplianceButton } from "@components";
import { requestForToken } from "@src/firebase";
import { ReactComponent as REFRESH_ICON } from "@assets/refresh.svg";
import { ReactComponent as FAQ_ICON } from "@assets/faq.svg";
import { ReactComponent as LOGOUT_ICON } from "@assets/logout.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

type MainType = {
  user: User;
};

export default function Main({ user }: MainType) {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedAppliance, setSelectedAppliance] = useState<Appliance | null>(
    null
  );
  const navigate = useNavigate();
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
        className={styles.actionBarWrapper}
      >
        <button
          className={styles.actionButtonWrapper}
          onClick={() => navigate("faq")}
        >
          <FAQ_ICON width="25px" height="25px" />
          {"자주 묻는 질문"}
        </button>
        <button
          className={styles.actionButtonWrapper}
          onClick={() => window.location.reload()}
        >
          <REFRESH_ICON width="25px" height="25px" />
          {"새로고침"}
        </button>
        <button
          className={styles.actionButtonWrapper}
          onClick={() => navigate("logout")}
        >
          <LOGOUT_ICON width="25px" height="25px" />
          {"로그아웃"}
        </button>
      </motion.div>
    </div>
  );
}

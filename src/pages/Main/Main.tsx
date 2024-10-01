import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import ApplianceButton from "../../components/ApplianceButton/ApplianceButton";
import Carousel from "../../components/Carousel/Carousel";
import { Appliance, User } from "../../types";
import { fetchAppliances } from "../../api";
import ModeModal from "../../components/ModeModal/ModeModal";

type MainType = {
  user: User;
};

export default function Main({ user }: MainType) {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedAppliance, setSelectedAppliance] = useState<Appliance | null>(
    null,
  );

  useEffect(() => {
    //get appliances at first
    getAppliances();
  }, []);

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
    <div className={styles.machineWrapper}>
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
    <div className={styles.machineWrapper}>
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
      <span className={styles.mainText}>{user.name}님 환영합니다</span>
      <div className={styles.carouselWrapper}>
        <Carousel contents={SLIDES} />
      </div>
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
    </div>
  );
}

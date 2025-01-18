import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { Appliance, User } from "@src/types";
import { fetchAppliances } from "@api";
import { Button, ModeModal, Carousel, ApplianceButton } from "@components";
import { requestForToken } from "@src/firebase";

type MainType = {
  user: User;
};

export default function Main({ user }: MainType) {
  const [appliances, setAppliances] = useState<Appliance[]>([]);
  const [selectedAppliance, setSelectedAppliance] = useState<Appliance | null>(
    null
  );

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

  const logOutButtonClicked = () => {
    localStorage.clear();
    window.location.reload();
  };

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

      <div className={styles.MainButtonWrapper}>
        <Button children="새로고침" onClick={() => window.location.reload()} />
        <Button children="로그아웃" onClick={logOutButtonClicked} />
      </div>

      <div className={styles.versionTextWrapper}>
        <p>
          {`v.1.1.0 \n문제생기면 846 임찬양 851 김건중으로 연락주세요!`}
        </p>
      </div>
    </div>
  );
}

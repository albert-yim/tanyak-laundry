import React, {useState} from "react";
import styles from "./Main.module.scss";
import LaunDryerButton from "../../components/LaunDryerButton/LaunDryerButton";
import Modal from "../../components/Modal/Modal";
import Carousel from "../../components/Carousel/Carousel";
import {User, Dryer, Laundry} from "../../types"

type MainType = {
  user: User;
};


// Demo Database for each laundry machine
const LAUNDRIES: Laundry[] = [
  {
    user: {
      id: "23-70006795",
      name: "임찬양",
      rank: "병장",
    },
    mode: "강력세탁",
    //isostring
    // type: "dryer"
    // type_id: ""
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 1,
  },
  {
    user: {
      id: "23-70016324",
      name: "김건중",
      rank: "상병",
    },
    mode: "청정세탁",
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 2,
  },
  {
    user: {
      id: "23-70016324",
      name: "김건중",
      rank: "상병",
    },
    mode: "청정세탁",
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 3,
  },
  {
    user: {
      id: "23-70016324",
      name: "김건중",
      rank: "상병",
    },
    mode: "청정세탁",
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 4,
  },
]

// Demo Database for each dryer
const DRYERS: Dryer[] = [
  {
    user: {
      id: "23-70006795",
      name: "임찬양",
      rank: "병장",
    },
    mode: "regular",
    //isostring
    // type: "dryer"
    // type_id: ""
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 1,
  },
  {
    user: {
      id: "23-70016324",
      name: "김건중",
      rank: "상병",
    },
    mode: "regular",
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 2,
  },
  {
    user: {
      id: "23-70016324",
      name: "김건중",
      rank: "상병",
    },
    mode: "regular",
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 3,
  },
  {
    user: {
      id: "23-70016324",
      name: "김건중",
      rank: "상병",
    },
    mode: "regular",
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 4,
  },
]


export default function Main({ user }: MainType) {
  const [modalVisible, setModalVisible] = useState(false); // useState for modal visibility
  const FirstSlide =
        <div className={styles.machineWrapper}> {/** used map for aligning LaunDryerButtons with demo database info */}
          <>
          {DRYERS.slice(0,2).map((dryer)=>(<LaunDryerButton key={`dryer-${dryer.position}`} onClick={() => setModalVisible(true)} type={"dryer"} typeNumber={dryer.position} user={dryer.user} startTime={dryer.startTime} endTime={dryer.endTime}/>))}
          {LAUNDRIES.slice(0,2).map((laundry)=>(<LaunDryerButton key={`laundry-${laundry.position}`} onClick={() => setModalVisible(true)} type={"laundry"} typeNumber={laundry.position} user={laundry.user} startTime={laundry.startTime} endTime={laundry.endTime}/>))}
          </>
        </div>

  const SecondSlide =
        <div className={styles.machineWrapper}> {/** used map for aligning LaunDryerButtons with demo database info */}
          <>
          {DRYERS.slice(2,4).map((dryer)=>(<LaunDryerButton key={`dryer-${dryer.position}`} onClick={() => setModalVisible(true)} type={"dryer"} typeNumber={dryer.position} user={dryer.user} startTime={dryer.startTime} endTime={dryer.endTime}/>))}
          {LAUNDRIES.slice(2,4).map((laundry)=>(<LaunDryerButton key={`laundry-${laundry.position}`} onClick={() => setModalVisible(true)} type={"laundry"} typeNumber={laundry.position} user={laundry.user} startTime={laundry.startTime} endTime={laundry.endTime}/>))}
          </>
        </div>
    
  
  const SLIDES = [FirstSlide, SecondSlide]

  return (
    <div className={styles.mainWrapper}> {/* welcoming text */}
      <span className={styles.mainText}>{user.name}님 환영합니다</span> 
      <div className={styles.carouselWrapper}>
        <Carousel contents={SLIDES}/>
      </div>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />  {/** empty modal component */}
    </div>
  );
}

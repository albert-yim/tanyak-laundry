import React from "react";
import styles from "./Main.module.scss";
import LaunDryerButton from "../../components/LaunDryerButton/LaunDryerButton";
import Modal from "../../components/Modal/Modal";
import ModeButton from "../../components/ModeButton/ModeButton";
import {User, Dryer, Laundry} from "../../types"

type MainType = {
  userName: string;
};



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
    //isostring
    // type: "dryer"
    // type_id: ""
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 2,
  },
  {
    user: {
      id: "24-70001991",
      name: "조현제",
      rank: "일병",
    },
    mode: "표준세탁",
    //isostring
    // type: "dryer"
    // type_id: ""
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 2,
  },
]

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
    //isostring
    // type: "dryer"
    // type_id: ""
    startTime: "2024-09-03T23:23:23",
    endTime: "2024-09-03T23:59:59",
    position: 2,
  },
]


export default function Main({ userName }: MainType) {

  return (
    <div className={styles.mainWrapper}>
      <span className={styles.mainText}>{userName}님 환영합니다</span>
      
      <div className={styles.machineWrapper}>
        {DRYERS.slice(0,2).map((dryer)=>(<LaunDryerButton key={`dryer-${dryer.position}`} type={"dryer"} typeNumber={dryer.position} user={dryer.user} startTime={dryer.startTime} endTime={dryer.endTime}/>))}
      </div>

      <div className={styles.machineWrapper}>
        {LAUNDRIES.slice(0,2).map((laundry)=>(<LaunDryerButton key={`laundry-${laundry.position}`} type={"laundry"} typeNumber={laundry.position} user={laundry.user} startTime={laundry.startTime} endTime={laundry.endTime}/>))}
      </div>
    </div>
  );
}

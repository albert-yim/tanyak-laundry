import React, {useState,useRef, useEffect} from "react";
import styles from "./TimePicker.module.scss";

type TimePickerTypes = {
    
}

export default function TimePicker({} : TimePickerTypes)  {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const numbers = Array.from({ length: 60 }, (_, i) => i);
    const defaultNumber = 36;
    const itemRefs = useRef<HTMLDivElement>(null);
    const ITEM_HEIGHT = 30;

    // const handleScroll = () => {
    //     if (ref.current) {
    //         if (ref.current.scrollTop < ITEM_HEIGHT) {
    //             ref.current.scrollTop = ITEM_HEIGHT
    //         }
    //         const index = Math.floor(
    //             (ref.current!.scrollTop | ITEM_HEIGHT / 2) /ITEM_HEIGHT);
    //             if (list[index] !== "") {
    //                 setSelectedNumber(index);
    //                 itemRefs.current[index]?.scrollIntoView({
    //                     behavior: "smooth",
    //                     block: "center"
    //                 })
    //                 onSelectedChange && onSelectedChange(newList[index])
    //             }
    //         )
    //     }
    // }
    
    return(
        <div className={styles.timePickerWrapper} >
            <div className={styles.numbersWrapper} ref={itemRefs} onScroll={()=> {
                const xpos = itemRefs.current?.scrollLeft ?? -1
                if (xpos < 0) return
                console.log(xpos/30)
                setSelectedNumber(xpos/30)
            }}>
                {numbers.map((number) => {
                    return (
                        <div 
                            id={`${number}}`} 
                            className={styles.labelWrapper}
                            onClick={() => {
                                itemRefs?.current?.scrollTo({
                                    left: 30 * (number-2),
                                    behavior: "smooth",
                                })
                                setSelectedNumber(number)}}
                        >
                            <span>{number}</span>
                        </div>
                    )
                })}
            </div>
            <div className={styles.vector}/>
            <div className={styles.text}>{selectedNumber}</div>
        </div>
    )
}

export function TimePickerTest(){
    return(
        <div>
            <TimePicker/>
        </div>
    )
} 
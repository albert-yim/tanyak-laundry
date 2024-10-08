import React, {useState,useRef, useEffect} from "react";
import styles from "./TimePicker.module.scss";

type TimePickerTypes = {
    duration: number;
    setDuration: (m:number) => void;

}

export default function TimePicker({duration, setDuration} : TimePickerTypes)  {
    const numbers = [null,null,...Array.from({ length: 60 }, (_, i) => i),null,null];
    const itemRefs = useRef<HTMLDivElement>(null);

    useEffect(() => {
        itemRefs?.current?.scrollTo({
            left: 30 * duration,
        })
    })

    return(
        <div className={styles.timePickerWrapper} >
            <div className={styles.numbersWrapper} ref={itemRefs}>
                {numbers.map((number) => {
                    return (
                        <div 
                            id={`${number}}`} 
                            className={styles.labelWrapper}
                            onClick={() => {
                                itemRefs?.current?.scrollTo({
                                    left: 30 * number!,
                                    behavior: "smooth",
                                })
                                setDuration(number!)}}
                        >
                            <span>{number}</span>
                        </div>
                    )
                })}
            </div>
            <div className={styles.vector}/>
        </div>
    )
}

export function TimePickerTest(){
    const [duration, setDuration] = useState<number>(40)
    return(
        <div>
            <TimePicker duration={duration} setDuration={setDuration}/>
            <span>{duration}</span>
        </div>
    )
} 
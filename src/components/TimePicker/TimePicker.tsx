import React, {useState} from "react";
import styles from "./TimePicker.module.scss";

type TimePickerTypes = {
    defaultValue: number;
    values: { value: number; label:string }[];
}

export default function TimePicker({ values, defaultValue} : TimePickerTypes)  {
    const [scrollPosition, setScrollPosition] = useState(0);

    return(
        <div className={styles.timePickerWrapper}>
            <div className={styles.numbersWrapper}>
                {values.map((v,i) => {
                    return (
                        <div key={v.value} className={styles.labelWrapper}>
                            <span>{v.label}</span>
                        </div>
                    )
                })}
            </div>
            <div className="action-btns">
                <button>Scroll Left</button>
                <button>Scroll Right</button>
            </div>
        </div>
    )
}

export function TimePickerTest(){
    const defaultValue = 36;
    const start = 0
    const values = new Array(60)
    .fill(0)
    .map((_,i) => {
        const value = start + i;
        return {value, label: `${value}`};
    })
    return(
        <div>
            <TimePicker values={values} defaultValue={defaultValue}/>
        </div>
    )
} 
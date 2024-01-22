'use client'

import { useState } from "react"
import { Timer, TimerInstance } from "./timer"
import { TimerButtons } from "./TimerButtons"

export const Pomodoro = () => {
    const [timer, setTimer] = useState<TimerInstance>({hour:0, expired:false,minute:0, notified:false,second:0,tag:"hello"})

    const breakButtonHandler = () => {
        console.log("Short button pressed")
    }

    const longBreakButtonHandler = () => {
        console.log("Long break")
    }

    const workButtonHandler = () => {
        console.log("Work button")
    } 

    return  (
    <div>
        <Timer timer={timer}/>
        <TimerButtons breakButtonHandler = {breakButtonHandler} 
                        longBreakButtonHandler={longBreakButtonHandler}
                        workButtonHandler={workButtonHandler}/>
        
    </div>
    )

}
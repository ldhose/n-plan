'use client'
import { useState } from "react"
import { Timer} from "./timer"
import { TimerButtons } from "./TimerButtons"
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"
import { TimerList } from "./TimerList"
import { TimerInstance } from "@/app/lib/timer"


export const Pomodoro = () => {

   
    const twentyFiveMinuteTimer:TimerInstance = {id: 1, minute: 25, text: "25 Minutes", expired: false, notified: false, remainingSeconds: 25 * 60}
    const fiveMinuteTimer: TimerInstance = {id: 2, minute: 5, text: "5 Minutes", expired: false, notified: false, remainingSeconds: 5 * 60};
    const bigBreak: TimerInstance = {id: 3, minute: 30, text: "30 Minutes", expired: false, notified: false, remainingSeconds: 30 * 60}
    const [timer, setTimer] = useState<number>(twentyFiveMinuteTimer.remainingSeconds)
    
    const breakButtonHandler = async () => {
        console.log("Short button pressed")
        setTimer(fiveMinuteTimer.remainingSeconds);
        console.log(fiveMinuteTimer.text)
    }

    const longBreakButtonHandler = () => {
        setTimer(bigBreak.remainingSeconds);
        console.log(bigBreak.text)
        console.log("Long break")
    }

    const workButtonHandler = () => {

        console.log("Work button")
    }

    return  (
    <div>
        <Timer seconds={timer} updateTimer={setTimer}/>
        <TimerButtons breakButtonHandler = {breakButtonHandler}
                        longBreakButtonHandler={longBreakButtonHandler}
                        workButtonHandler={workButtonHandler}/>

    </div>
    )

}
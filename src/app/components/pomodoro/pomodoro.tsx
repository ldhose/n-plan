'use client'
import { useState } from "react"
import { Timer} from "./timer"
import { TimerButtons } from "./TimerButtons"
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"
import { TimerList } from "./TimerList"
import { TimerInstance } from "@/app/lib/timer"
import  PomodoroContextProvider from "../contexts/pomodoroContext"
import { InputText } from "./InputText"



export const Pomodoro = () => {

   
    const twentyFiveMinuteTimer:TimerInstance = {id: 1, minute: 25, text: "25 Minutes", expired: false, notified: false, remainingSeconds: 25 * 60}
    const fiveMinuteTimer: TimerInstance = {id: 2, minute: 5, text: "5 Minutes", expired: false, notified: false, remainingSeconds: 5 * 60};
    const fiveSecTestTimer:TimerInstance = {id: 1, minute: 1, text: "25 Minutes", expired: false, notified: false, remainingSeconds: 5}

    const bigBreak: TimerInstance = {id: 3, minute: 30, text: "30 Minutes", expired: false, notified: false, remainingSeconds: 30 * 60}
    const [timer, setTimer] = useState<TimerInstance>(twentyFiveMinuteTimer)
    const breakButtonHandler = async () => {
        console.log("Short button pressed")
        setTimer(fiveMinuteTimer);
        console.log(fiveMinuteTimer.text)
    }

    const longBreakButtonHandler = () => {
        setTimer(bigBreak);
        console.log(bigBreak.text)
        console.log("Long break")
    }

    const workButtonHandler = () => {

        console.log("Work button")
    }

    const testButton = () => {
        setTimer(fiveSecTestTimer);
        console.log("Set timer to 5 s")
    }

    return  (
    <div>
        <PomodoroContextProvider>
            <Timer />
            <TimerButtons />
            <InputText />
        </PomodoroContextProvider>

    </div>
    )

}
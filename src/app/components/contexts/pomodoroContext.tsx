'use client'
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { TimerInstance } from "@/app/lib/timer";



export const PomodoroContext = createContext<{timer: TimerInstance, setTimer: Dispatch<SetStateAction<TimerInstance>>}| undefined>(undefined)


export default function PomodoroContextProvider({children, }: {children: React.ReactNode}) {

    const twentyFiveMinuteTimer:TimerInstance = {id: 1, minute: 25, text: "25 Minutes", expired: false, notified: false, remainingSeconds: 25 * 60}

    const [timer, setTimer] = useState<TimerInstance>(twentyFiveMinuteTimer)
    return (
        <PomodoroContext.Provider value = {{timer, setTimer}}>
            {children}
        </PomodoroContext.Provider>
    )

    
}
export const usePomodoroContext = () => {
    const timerInstance = useContext(PomodoroContext)
    if (timerInstance === undefined) {
        throw new Error("Please provide context for pomodoro subcomponents")
    }
    return timerInstance;
}

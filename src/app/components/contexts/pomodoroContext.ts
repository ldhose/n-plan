import { createContext, useContext } from "react";
import { TimerInstance } from "@/app/lib/timer";


export const PomodoroContext = createContext<TimerInstance| undefined>(undefined)

export const usePomodoroContext = () => {
    const timerInstance = useContext(PomodoroContext)
    if (timerInstance === undefined) {
        throw new Error("Please provide context for pomodoro subcomponents")
    }
    return timerInstance;
}

import { useState } from "react"
import { Timer, TimerInstance } from "./timer"
import { TimerButtons } from "./TimerButtons"
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"
import { TimerList } from "./TimerList"


export const Pomodoro = () => {
    const [timer, setTimer] = useState<TimerInstance>({hour:0, expired:false,minute:0, notified:false,second:0,text:"hello"})

    const breakButtonHandler = async () => {
        const getResult = await fetch("app/api/route.ts")
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
            <QueryClientProvider client={new QueryClient()}>

            {/* <TimerList /> */}
            </QueryClientProvider> 


    </div>
    )

}
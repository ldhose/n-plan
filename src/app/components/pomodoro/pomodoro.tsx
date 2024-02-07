import { useState } from "react"
import { Timer, TimerInstance } from "./timer"
import { TimerButtons } from "./TimerButtons"
import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query"
import axios from "axios"

 const TimerList = () => {
    const fetchTimer = async () => {
        console.log("Fetching timers")
        const response = await axios.get("http://localhost:8080/timer/eue")
        return response.data
    }


    const query =useQuery<TimerInstance[]>({
        queryKey: ['id'],
        queryFn: fetchTimer,
    })


    return (
        

            <div>
                <ul>
                    {query.data?.map((entry) =>(
                        <li key={entry.text}>{entry.text}</li>
                    ))}
                 </ul>
            </div>
        )
  }

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
                        <QueryClientProvider client={new QueryClient()}>

            <TimerList />
            </QueryClientProvider> 


    </div>
    )

}
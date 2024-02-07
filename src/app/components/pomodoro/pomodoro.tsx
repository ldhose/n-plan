import { useState } from "react"
import { Timer, TimerInstance } from "./timer"
import { TimerButtons } from "./TimerButtons"

async function TimerList() {
    const {data} = useQuery({
        
    })
    const res = await fetch("http://localhost:8080/timer/eue",{ cache: 'no-store' })
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return (
        <div>
        <ul>
            {res.json().then(value => value.map(entry =>(
                <li key={entry.text}>{entry.text}</li>
            ))).catch(error => console.log(error))}
        </ul>
        </div> )
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
        <TimerList />                
        
    </div>
    )

}
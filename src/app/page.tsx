'use client'
import Image from 'next/image'
import { Timer } from '../components/timer'
import { useRef, useState } from 'react';
import { useInterval } from "../components/utils"



export type TimerInstance = {
  tag: string,
  hour: number,
  minute: number,
  second: number,
  expired: boolean,
  notified: boolean
}


export default function Home() {

  const [timer, setTimer] = useState<TimerInstance>({tag: "Timer", second: 0, minute: 0, hour: 0, expired: false, notified: false});



  function updateTimer(): void {    
    if(timer.expired) {
        if(!timer.notified) {
            console.log("Notification sent")
            // notify({text: "timer expired"})
                //TODO notify   
        }


        setTimer({...timer, ...{expired:true, notified: true}})
        return
    }    
    var timerStateCopy: TimerInstance = structuredClone(timer)
    updateTimerSecond(timerStateCopy)
    console.log("updating time")

    setTimer(timerStateCopy)
}

function updateTimerHour(timer: TimerInstance) {
    if(timer.hour == 0) {
        timer.minute = 0
        timer.hour =0
        timer.second = 0
        timer.expired = true
    } else {
        timer.hour = timer.hour - 1
        timer.minute = 59
    }
    return timer
}

function updateTimerMinute(timer: TimerInstance) {
    if(timer.minute == 0) {
        updateTimerHour(timer)
        
    } else {
        timer.minute = timer.minute - 1 
        timer.second = 59
    }
    return timer

}

function updateTimerSecond(timer: TimerInstance): TimerInstance{
    if(timer.second == 0) {
        updateTimerMinute(timer)
    } else {
        timer.second = timer.second - 1
    }
    return timer
}
useInterval(() => updateTimer(), 1000)

function startTimer() {
  const updatedTimer: TimerInstance = {...timer, ...{minute: 5, second: 0, expired: false, notified: false}}
  setTimer(updatedTimer)
  console.log(timer)
}

  return (
    <main className="min-h-screen min-w-full bg-slate-900 p-6">
      <div className="m-w-64 m-auto p-1
                         md:m-w-96">
          <input type='text' className='w-full min-h-9 block m-auto text-center bg-slate-800'>
          </input>
          <button id="5min-button" onClick={startTimer}> 5 min</button>
      {/* <div className='grid '>
        <button className=''>Start Timer</button>
      </div> */}
      </div>
      { !timer.notified &&
      <Timer timer={timer}/>
}

    </main>
  )
}


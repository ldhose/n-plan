"use client";
import React, { useState, useEffect, useContext } from "react"
import { notify } from "../Notification"
import { TimerInstance } from "@/app/lib/timer";
import { PomodoroContext } from "../contexts/pomodoroContext";

export const Timer = () => {
  
  const {timer, setTimer} = useContext(PomodoroContext);

  useEffect(() => {
    if (timer !== null) {
      let id = setInterval(() =>{
        if(timer.remainingSeconds >0 ) {
          setTimer({...timer, remainingSeconds: timer.remainingSeconds - 1})
        }
        else if(!timer.notified) {
        // const audio = new Audio("/timer-sound.mp3")
          // audio.play()
          // notify({text: "Timer finished"})
          console.log("Setting notification to true")
          timer.notified =true;
        }
        
      }, 1000);
      return () => clearInterval(id);
    }
  },[timer])

  return (
    <div>
  
      <div
        className="grid place-items-center h-64 w-64 bg-slate-800 rounded-full 
        sm:h-64 sm:w-64 md:h-96 md:w-96 m-auto mt-10"
      >
        {timer.remainingSeconds > 0 ? <span>{Math.floor(timer.remainingSeconds / 60)} : { timer.remainingSeconds % 60}</span> : <span>No active timers {timer.text}</span>  }
      </div>
    </div>
  )
}

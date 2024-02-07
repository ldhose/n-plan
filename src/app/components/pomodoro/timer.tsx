"use client";
import { time } from "console";
import { Props } from "next/script";
import React, { useState, useEffect } from "react";
import { notify } from "../Notification";
import { useInterval } from "../utils";

export type TimerInstance = {
  text: string;
  hour: number;
  minute: number;
  second: number;
  expired: boolean;
  notified: boolean;
};
type TimerProps = {
  timer: TimerInstance
}
export const Timer = (timerProps: TimerProps) => {
  const [timer, setTimer] = useState<TimerInstance>({expired: false, hour:0,minute:0,notified:false,second:0,text:"Hello"})
  function updateTimer(): void {
    if (timer.expired) {
      if (!timer.notified) {
        console.log("Notification sent");
        // notify({text: "timer expired"})
        //TODO notify
      }

      setTimer({ ...timer, ...{ expired: true, notified: true } });
      return;
    }
    var timerStateCopy: TimerInstance = structuredClone(timer);
    updateTimerSecond(timerStateCopy);
    console.log("updating time");

    setTimer(timerStateCopy);
  }

  function updateTimerHour(timer: TimerInstance) {
    if (timer.hour == 0) {
      timer.minute = 0;
      timer.hour = 0;
      timer.second = 0;
      timer.expired = true;
    } else {
      timer.hour = timer.hour - 1;
      timer.minute = 59;
    }
    return timer;
  }

  function updateTimerMinute(timer: TimerInstance) {
    if (timer.minute == 0) {
      updateTimerHour(timer);
    } else {
      timer.minute = timer.minute - 1;
      timer.second = 59;
    }
    return timer;
  }

  function updateTimerSecond(timer: TimerInstance): TimerInstance {
    if (timer.second == 0) {
      updateTimerMinute(timer);
    } else {
      timer.second = timer.second - 1;
    }
    return timer;
  }
  useInterval(() => updateTimer(), 1000);

  function startTimer() {
    const updatedTimer: TimerInstance = {
      ...timer,
      ...{ minute: 5, second: 0, expired: false, notified: false },
    };
    setTimer(updatedTimer);
    console.log(timer);
  }



  return (
    <div>
      &&
      <div
        className="grid place-items-center h-64 w-64 bg-slate-800 rounded-full 
        sm:h-64 sm:w-64 md:h-96 md:w-96 m-auto mt-10"
      >
        {timerProps.timer.hour}:{timerProps.timer.minute}:
        {timerProps.timer.second}
      </div>
    </div>
  )
}

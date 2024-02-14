"use client";
import React, { useState, useEffect } from "react";
import { useInterval } from "../utils";

export type TimerInstance = {
  id: number,
  text: string;
  minute: number;
  remainingSeconds: number;
  expired: boolean;
  notified: boolean;
};
type TimerProps = {
  timer: TimerInstance
}
export const Timer = (timerProps: TimerProps) => {
  const [seconds, setTimer] = useState<number>(timerProps.timer.remainingSeconds)
  function updateTimer(): void {
      if(seconds == 0) {
        return;
      }
      setTimer(seconds-1);
  }

  function updateTimerSecond(timer: TimerInstance): TimerInstance {
    if (timer.remainingSeconds == 0) {
      timer.expired = true;
    } else {
      timer.remainingSeconds = timer.remainingSeconds - 1;
    }
    return timer;
  }

  useInterval(() => updateTimer(), 1000);

  return (
    <div>
      &&
      <div
        className="grid place-items-center h-64 w-64 bg-slate-800 rounded-full 
        sm:h-64 sm:w-64 md:h-96 md:w-96 m-auto mt-10"
      >
        {Math.ceil(seconds / 60)} : {seconds % 60}
      </div>
    </div>
  )
}

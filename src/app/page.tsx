"use client";
import Image from "next/image";
import { Timer, TimerInstance } from "./components/pomodoro/timer";
import { useRef, useState } from "react";
import { useInterval } from "./components/utils";
import { Pomodoro } from "@/app/components/pomodoro/pomodoro";

export default function Home() {
  
  


  const [timer, setTimer] = useState<TimerInstance>({
    tag: "Timer",
    second: 0,
    minute: 0,
    hour: 0,
    expired: false,
    notified: false,
  });

  return (
    <main className="min-h-screen min-w-full bg-slate-900 p-6">
     <Pomodoro />
    </main>
  );
}

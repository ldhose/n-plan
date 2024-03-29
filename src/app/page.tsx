"use client";
import Image from "next/image";
import { Timer } from "./components/pomodoro/timer";
import { useRef, useState } from "react";
import { Pomodoro } from "@/app/components/pomodoro/pomodoro";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TimerList } from "./components/pomodoro/TimerList";
import { TimerInstance } from "./lib/timer";
import Link from "next/link";

export default function Home() {
  
  // let data = await fetch('http://localhost:3000/api')
  // let json = await data.json();
  // return <h1> {JSON.stringify(json)}</h1>


  const [timer, setTimer] = useState<TimerInstance>({
    id: 1,
    text: "Timer",
    remainingSeconds: 0,
    minute: 0,
    expired: false,
    notified: false,
  });

  return (
    <main className="min-h-screen min-w-full bg-slate-900 p-6">
      hello
      <Link href="/pomodoro"> Manage Timers </Link>
      <QueryClientProvider client={new QueryClient()}>
        <Pomodoro />
        <TimerList />
      </QueryClientProvider>

    </main>
  );
}

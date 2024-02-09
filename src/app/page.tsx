"use client";
import Image from "next/image";
import { Timer, TimerInstance } from "./components/pomodoro/timer";
import { useRef, useState } from "react";
import { useInterval } from "./components/utils";
import { Pomodoro } from "@/app/components/pomodoro/pomodoro";

export default async function Home() {
  
  let data = await fetch('http://localhost:3000/api')
  let json = await data.json();
  return <h1> {JSON.stringify(json)}</h1>



  // return (
  //   <main className="min-h-screen min-w-full bg-slate-900 p-6">
  //    <Pomodoro />
  //   </main>
  // );
}

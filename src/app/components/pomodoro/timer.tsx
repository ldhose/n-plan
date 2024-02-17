"use client";
import React, { useState, useEffect } from "react";

export const Timer = ({seconds, updateTimer}: {seconds: number, updateTimer: any }) => {

  useEffect(() => {
    if (seconds !== null) {
      let id = setInterval(() =>{
        if(seconds >0 ) {
          updateTimer(seconds - 1)
        }
      }, 1000);
      return () => clearInterval(id);
    }
  },[seconds])

  return (
    <div>
  
      <div
        className="grid place-items-center h-64 w-64 bg-slate-800 rounded-full 
        sm:h-64 sm:w-64 md:h-96 md:w-96 m-auto mt-10"
      >
        {seconds > 0 ? <span>{Math.ceil(seconds / 60)} : { seconds % 60}</span> : <span>No active timers {seconds}</span>  }
      </div>
    </div>
  )
}

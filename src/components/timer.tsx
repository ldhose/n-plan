'use client'
import { time } from "console"
import { Props } from "next/script"
import React, { useState, useEffect } from "react"
import { notify } from "./Notification"
import { TimerInstance } from "@/app/page"

type TimerProps = {
    timer: TimerInstance
}




export const Timer = (timerProps: TimerProps) => {






    return( <div>
         && 
    <div className='grid place-items-center h-64 w-64 bg-slate-800 rounded-full 
        sm:h-64 sm:w-64 md:h-96 md:w-96 m-auto mt-10'>
        {timerProps.timer.hour}:{timerProps.timer.minute}:{timerProps.timer.second}
    </div>
    
</div>)

}
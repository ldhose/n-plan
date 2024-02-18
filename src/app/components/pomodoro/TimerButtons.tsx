import { TimerInstance } from "@/app/lib/timer"
import { usePomodoroContext } from "../contexts/pomodoroContext";







//TODO Design timer button based on the timers
export const TimerButtons =() => {
    const {timer, setTimer} = usePomodoroContext();
    
    const updateTimer = (timer: TimerInstance) => {
        setTimer(timer)
    }
    return (
        <div className="min-w-80 grid mt-8 grid-cols-3 m-auto max-w-96">
            <button onClick={() => updateTimer({...timer,notified: false})}>Short Break</button>
            {/* <button onClick={timerButtonProps.workButtonHandler}> Work </button> */}
            {/* <button onClick={timerButtonProps.longBreakButtonHandler}> Long Break </button> */}
            {/* <button onClick={timerButtonProps.testButton}>Test 5 s</button> */}
        </div>
    )
}
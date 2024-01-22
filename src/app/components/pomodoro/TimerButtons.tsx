
type TimerButtonProps = {
    breakButtonHandler: () => void,
    workButtonHandler: () => void,
    longBreakButtonHandler: () => void,
}

export const TimerButtons =(timerButtonProps: TimerButtonProps) => {
    return (
        <div className="min-w-80 grid mt-8 grid-cols-3 m-auto max-w-96">
            <button onClick={timerButtonProps.breakButtonHandler} >Short Break</button>
            <button onClick={timerButtonProps.workButtonHandler}> Work </button>
            <button onClick={timerButtonProps.longBreakButtonHandler}> Long Break </button>

        </div>
    )
}
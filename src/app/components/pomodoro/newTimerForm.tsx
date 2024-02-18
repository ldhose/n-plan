export const NewTimerForm = () => {

    function saveTimer() {
        
    }


    return (
        <form method="post" id="create-new-timer" onSubmit={saveTimer}>
            <p>
                <label htmlFor="timer-name">Timer text</label>
                <input type="text" id="timer-name" name="timer-name"></input>
            </p>
            <p>
                <label htmlFor="timer-length">Timer length in minutes</label>
                <input type="text" id="timer-length" name="timer-length"></input>
            </p>

        </form>
    )
    
}
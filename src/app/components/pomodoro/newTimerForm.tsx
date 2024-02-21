export const NewTimerForm = () => {

    return (
        <div className="min-w-28  m-auto md:max-w-md lg:max-w-lg">
            <form method="post" id="create-new-timer">
                <div className="grid grid-cols-1">
                    <div className="p-2 mt-2 grid grid-cols-3">
                        <label className="m-2" htmlFor="timer-name">Timer text</label>
                        <input className="bg-slate-800 col-span-2"type="text" id="timer-name" name="timer-name"></input>
                    </div>
                    <div className="p-2 mt-2 grid grid-cols-3">
                        <label className="m-2" htmlFor="timer-length">Timer length</label>
                        <input className="bg-slate-800 col-span-2" type="text" id="timer-length" name="timer-length"></input>
                    </div>
                    <button className="mt-1">Save</button>
                </div>
            </form>
        </div>
    )
    
}
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { TimerInstance } from "./timer"

export const TimerList = () => {
    const fetchTimer = async () => {
        console.log("Fetching timers")
        const response = await axios.get("http://localhost:8080/timer/eue")
        return response.data
    }


    const query =useQuery<TimerInstance[]>({
        queryKey: ['id'],
        queryFn: fetchTimer,
    })


    return (
        

            <div>
                <ul>
                    {query.data?.map((entry) =>(
                        <li key={entry.text}>{entry.text}</li>
                    ))}
                 </ul>
            </div>
        )
  }

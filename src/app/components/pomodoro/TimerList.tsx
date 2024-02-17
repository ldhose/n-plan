import { TimerInstance } from "@/app/lib/timer"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const TimerList = () => {
    const fetchTimer = async () => {
        console.log("Fetching timers")
        const response = await axios.get("http://localhost:8080/timer/findAll")
        return response.data
    }


    const query =useQuery<TimerInstance[]>({
        queryKey: ['id'],
        queryFn: fetchTimer,
    })


    return (
            <div>
                <ul>
                    {query.data?.map((entry: TimerInstance) =>(
                        <li key={entry.id}>{entry.text}</li>
                    ))}
                 </ul>
            </div>
        )
  }

import { useMemo } from "react";
import { useDateContext } from "../context/DateContext"
import { days, months } from "../data/timeNames";

export default function Header()
{
    const {date, dateTrack, setDateTrack} = useDateContext();

    const currentInfo: string[] = useMemo(() => {
        let dayName = days[date.getDay()];
        let dateNumber = String(date.getDate());
        let monthName = months[date.getMonth()];
        let yearNumber = String(date.getFullYear());

        return [dayName, dateNumber, monthName, yearNumber]

    }, [])

    function moveToPreviousWeek()
    {
        const prevWeek = new Date(dateTrack);
        prevWeek.setDate(prevWeek.getDate() - 7)
        setDateTrack(prevWeek)
    }

    function moveToNextWeek()
    {
        const nextWeek = new Date(dateTrack);
        nextWeek.setDate(nextWeek.getDate() + 7)
        setDateTrack(nextWeek)
    }

    return(
        <div>
            <div className="flex gap-2 px-4 py-4">
                <h1 className="font-bold">Today:</h1>
                <p>{currentInfo[0]}, {currentInfo[1]} {currentInfo[2]} {currentInfo[3]}</p>
            </div>
            <div className="flex gap-2 px-4 py-1">
                <button onClick={moveToPreviousWeek} className="bg-blue-800 px-6 py-2 text-amber-50 rounded-2xl hover:bg-blue-900 cursor-pointer">Prev</button>
                <button onClick={moveToNextWeek} className="bg-blue-800 px-6 py-2 text-amber-50 rounded-2xl hover:bg-blue-900 cursor-pointer">Next</button>
            </div>
            {/* <h1>dateTrakt's Current: {dateTrack.getDate()}</h1> */}
        </div>
    )
}
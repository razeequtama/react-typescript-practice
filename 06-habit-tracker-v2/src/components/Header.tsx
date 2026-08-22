import { useMemo } from "react";
import { useDateContext } from "../context/DateContext"
import { days, months } from "../data/timeNames";

export default function Header()
{
    const {date} = useDateContext();

    const currentInfo: string[] = useMemo(() => {
        let dayName = days[date.getDay()];
        let dateNumber = String(date.getDate());
        let monthName = months[date.getMonth()];
        let yearNumber = String(date.getFullYear());

        return [dayName, dateNumber, monthName, yearNumber]

    }, [])

    return(
        <div className="flex gap-2 px-4 py-4">
            <h1 className="font-bold">Today:</h1>
            <p>{currentInfo[0]}, {currentInfo[1]} {currentInfo[2]} {currentInfo[3]}</p>
        </div>
    )
}
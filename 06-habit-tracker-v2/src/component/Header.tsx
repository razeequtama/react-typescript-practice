import { useMemo } from "react";
import { useDateContext } from "../context/DateContext";
import { dayNameList, monthNameList } from "../data/names";

type CurrentDayType = {
    currDate: number
    day: string,
    month: string,
    year: number
}


export default function Header()
{
    const {date, dateTrack, setDateTrack} = useDateContext();

    const currentInformation = useMemo(() => {
        const currentInfo: CurrentDayType = {
            currDate: 0,
            day: "",
            month: "",
            year: 0
        }

        let currDateNum = date.getDate();
        let currDay = dayNameList[date.getDay()];
        let currMonth = monthNameList[date.getMonth()];
        let currYear = date.getFullYear();

        currentInfo.currDate = currDateNum;
        currentInfo.day = currDay;
        currentInfo.month = currMonth;
        currentInfo.year = currYear;

        return currentInfo;

    }, [])

    function moveToPreviousWeek()
    {
        setDateTrack(() => {
            const prevWeek = new Date(dateTrack);
            prevWeek.setDate(prevWeek.getDate() - 7);
            return prevWeek
        })
    }

    function moveToNextWeek()
    {
        setDateTrack(() => {
            const nextWeek = new Date(dateTrack);
            nextWeek.setDate(nextWeek.getDate() + 7);
            return nextWeek
        })
    }

    return(
        <div>
            <h1>Today</h1>
            <p>{currentInformation.day}, {currentInformation.currDate} {currentInformation.month} {currentInformation.year}</p>
            <button onClick={moveToPreviousWeek}>Prev</button>
            <button onClick={moveToNextWeek}>Next</button>
        </div>
    )
}
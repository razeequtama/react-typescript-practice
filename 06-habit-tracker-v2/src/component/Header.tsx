import { useMemo } from "react";
import { useDateContext } from "../context/DateContext";
import { dayNameList, monthNameList } from "../data/names";

type CurrentDayType = {
    currDate: number
    day: string,
    month: string,
    year: number
}


export default function Test()
{
    const {date} = useDateContext();

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

    return(
        <div>
            <h1>Today</h1>
            <p>{currentInformation.day}, {currentInformation.currDate} {currentInformation.month} {currentInformation.year}</p>
        </div>
    )
}
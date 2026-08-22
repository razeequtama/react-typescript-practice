import { useDateContext } from "../context/DateContext"
import type { HabitEntryType } from "./HabitEntry"
import { days } from "../data/timeNames"
import HabitEntry from "./HabitEntry"

export type HabitEntryListType = {
    id: number,
    habitName: string,
    habitEntryList: HabitEntryType[]
}

export default function HabitEntryList({id, habitName, habitEntryList}: HabitEntryListType)
{
    const {dateTrack} = useDateContext();

    function getWeekStartDateString(index: number)
    {
        const startWeekDate = new Date(dateTrack);
        startWeekDate.setDate(startWeekDate.getDate() - startWeekDate.getDay() + index);
        return startWeekDate.toLocaleDateString();

    }

    //FIX HERE

    return(
        <div>
            <div className="flex gap-4">
                {/* {habitEntryList.map(habitEntry => {
                    return <HabitEntry date={habitEntry.date.split("/")[1]} isDone={habitEntry.isDone} />
                })} */}

                {days.map((day, i) => {

                    const specificHabitEntryListDate = getWeekStartDateString(i);
                    const specificHabitEntryListSelection = habitEntryList.find(entry => {
                        return entry.date === specificHabitEntryListDate;
                    })

                    if(habitEntryList?.length === 0) return <HabitEntry date={getWeekStartDateString(i).split("/")[1]} isDone={false} day={day} />     
                    else return <HabitEntry date={getWeekStartDateString(i).split("/")[1]} isDone={specificHabitEntryListSelection?.isDone ? specificHabitEntryListSelection?.isDone : false} day={day} />  
                })}
            </div>
        </div>
    )
}
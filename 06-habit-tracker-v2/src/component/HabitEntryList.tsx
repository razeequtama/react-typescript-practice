import { dayNameList } from "../data/names";
import { useDateContext } from "../context/DateContext";
import type { HabitSetType } from "../context/HabitContext";
import HabitEntry from "./HabitEntry";

export default function HabitEntryList({habitSet}: {habitSet: HabitSetType})
{
    const {dateTrack} = useDateContext();

    function getStartOfWeekDate(index: number) {
        // Start with the date currently being tracked, making a copy so the original isn't modified.
        const currWeek = new Date(dateTrack);

        // Find the date number of the Sunday that starts this week.
        const currWeekStartDateNumber =
            currWeek.getDate() - currWeek.getDay();

        // Create a copy of the tracked date that we can adjust to the day we need.
        const currWeekStartDate = new Date(dateTrack);

        // Move from the start of the week to the day represented by the current index.
        currWeekStartDate.setDate(currWeekStartDateNumber + index);

        return currWeekStartDate;
    }

    return (
        <div>
            <h3>{habitSet.habitName}</h3>

            {dayNameList.map((day, i) => {
                const currentDate =
                    getStartOfWeekDate(i).toLocaleDateString();

                const isDone =
                    habitSet.habitList.find(
                        entry => entry.date === currentDate
                    )?.isDone ?? false;

                return (
                    <HabitEntry
                        key={day}
                        day={day}
                        date={currentDate.split("/")[1]}
                        isDone={isDone}
                    />
                );
            })}
        </div>
    );


}
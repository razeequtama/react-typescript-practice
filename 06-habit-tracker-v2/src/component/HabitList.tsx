import { useState } from "react";
import { useDateContext } from "../context/DateContext";
import { dayNameList, monthNameList } from "../data/names";
import HabitEntry from "./HabitEntry";

export default function HabitList() {
    const { date } = useDateContext();

    const [dateTrack, setDateTrack] = useState<Date>(new Date(date));

    // Calculate the start of the week from dateTrack.
    const startOfWeekDate = new Date(dateTrack);
    startOfWeekDate.setDate(dateTrack.getDate() - dateTrack.getDay());

    const endOfWeekDate = new Date(startOfWeekDate);
    endOfWeekDate.setDate(startOfWeekDate.getDate() + 7);

    function moveToPreviousWeek() {
        setDateTrack(prev => {
            const newDate = new Date(prev);
            newDate.setDate(newDate.getDate() - 7);
            return newDate;
        });
    }

    function moveToNextWeek() {
        setDateTrack(prev => {
            const newDate = new Date(prev);
            newDate.setDate(newDate.getDate() + 7);
            return newDate;
        });
    }

    return (
        <div className="habit-list">
            <button onClick={moveToPreviousWeek}>
                Prev
            </button>

            <button onClick={moveToNextWeek}>
                Next
            </button>

            <div className="week-header">
                <h2>
                    {monthNameList[startOfWeekDate.getMonth()]}{" "}
                    {startOfWeekDate.getFullYear()}
                </h2>

                <h2>
                    {monthNameList[endOfWeekDate.getMonth()]}{" "}
                    {endOfWeekDate.getFullYear()}
                </h2>
            </div>

            <div className="week-days">
                {dayNameList.map((day, index) => {
                    const currentDate = new Date(startOfWeekDate);
                    currentDate.setDate(startOfWeekDate.getDate() + index);

                    return (
                        <HabitEntry
                            key={index}
                            day={day}
                            date={currentDate.getDate()}
                        />
                    );
                })}
            </div>
        </div>
    );
}
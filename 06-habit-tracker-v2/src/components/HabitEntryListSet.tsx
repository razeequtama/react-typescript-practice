import { useDateContext } from "../context/DateContext";
import { useHabitListSetContext } from "../context/HabitEntryListSetContext";
import HabitEntryList from "./HabitEntryList";
import { months } from "../data/timeNames";

export default function HabitEntryListSet()
{
    const {habitEntryListSet} = useHabitListSetContext();
    const {dateTrack} = useDateContext();

    function getStartOfWeek()
    {
        const startWeekDate = new Date(dateTrack);
        startWeekDate.setDate(startWeekDate.getDate() - startWeekDate.getDay());
        return startWeekDate;
    }

    function getEndOfWeek()
    {
        const endWeekDate = new Date(dateTrack);
        endWeekDate.setDate(endWeekDate.getDate() + (7 - endWeekDate.getDay()));
        return endWeekDate;
    }

    return(
        <div className="flex-col max-w-3xl">
            <div className="flex justify-between px-4 py-2">
                <h3>{months[getStartOfWeek().getMonth()]} {getStartOfWeek().getFullYear()}</h3>
                <h3>{months[getEndOfWeek().getMonth()]} {getEndOfWeek().getFullYear()}</h3>
            </div>
            <div className="px-4 py-2 flex flex-col gap-4">
                {habitEntryListSet.length === 0 ?
                    <p>There are currently no habits! Add one to get started!</p>
                    :
                    habitEntryListSet.map(habitEntryList => {
                        return(
                            <div key={habitEntryList.id} className="max-w-4xl">
                                <HabitEntryList id={habitEntryList.id}
                                                habitName={habitEntryList.habitName}
                                                habitEntryList={habitEntryList.habitEntryList}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
import { useDateContext } from "../context/DateContext"
import type { HabitEntryType } from "./HabitEntry"
import { days } from "../data/timeNames"
import HabitEntry from "./HabitEntry"
import { useHabitListSetContext } from "../context/HabitEntryListSetContext"

export type HabitEntryListType = {
    id: number,
    habitName: string,
    habitEntryList: HabitEntryType[]
}

export default function HabitEntryList({id, habitName, habitEntryList}: HabitEntryListType)
{
    const {dateTrack} = useDateContext();
    const {setHabitEntryListSet} = useHabitListSetContext();
 
    function getWeekStartDateString(index: number)
    {
        const startWeekDate = new Date(dateTrack);
        startWeekDate.setDate(startWeekDate.getDate() - startWeekDate.getDay() + index);
        return startWeekDate.toLocaleDateString();

    }

    //FIX HERE
    
    function toggleClick(dateString: string) {
        setHabitEntryListSet(prev =>
            prev.map(entry => {
                // If the entry's Id doesn't match, return it (not changing a thing)
                if (entry.id !== id) return entry;

                // I wanna check if the date we're clicking already exists
                // inside this habit's habitEntryList.
                const existingHabitEntry = entry.habitEntryList.find(
                    habitEntry => habitEntry.date === dateString
                );

                // If the date doesn't exist yet, create a new habitEntry for it.
                if (!existingHabitEntry) {
                    return {
                        // provide the other entries
                        ...entry,

                        // Take all the existing habit entries,
                        // then add the newly clicked date to the end.
                        habitEntryList: [
                            ...entry.habitEntryList,
                            {
                                // The date we just clicked
                                date: dateString,

                                // Since we're initializing it by clicking it,
                                // make it done immediately.
                                isDone: true
                            }
                        ]
                    };
                }

                // The date already exists, so now we wanna find it
                // and toggle its isDone value.
                return {
                    // provide the other entries
                    ...entry,

                    // I wanna find something from the habitEntryList array
                    // (the one with date and isDone)
                    habitEntryList: entry.habitEntryList.map(habitEntry => {

                        // If the entry's date doesn't match,
                        // return it (not changing a thing)
                        if (habitEntry.date !== dateString) {
                            return habitEntry;
                        }

                        // If match, do the following thing:
                        return {
                            // provide the other entries
                            ...habitEntry,

                            // This is it. Change the date's isDone to its opposite.
                            isDone: !habitEntry.isDone
                        };
                    })
                };
            })
        );
    }

    return(
        <div className="flex flex-col gap-4">
            {/* {habitEntryList.map(habitEntry => {
                return <HabitEntry date={habitEntry.date.split("/")[1]} isDone={habitEntry.isDone} />
            })} */}
            <h1 className="font-bold text-2xl">{habitName}</h1>
            
            <div className="flex gap-4">
                {days.map((day, i) => {

                    const specificHabitEntryListDate = getWeekStartDateString(i);
                    const specificHabitEntryListSelection = habitEntryList.find(entry => {
                        return entry.date === specificHabitEntryListDate;
                    })

                    if(habitEntryList?.length === 0)
                    {
                        return <HabitEntry
                                    key={id}
                                    date={getWeekStartDateString(i)}
                                    isDone={false}
                                    day={day}
                                    toggleClick={() => toggleClick(getWeekStartDateString(i))}
                                />     
                    }
                    else
                    {
                        return <HabitEntry
                                    key={id}
                                    date={getWeekStartDateString(i)}
                                    isDone={specificHabitEntryListSelection?.isDone ? specificHabitEntryListSelection?.isDone : false}
                                    day={day} 
                                    toggleClick={() => toggleClick(getWeekStartDateString(i))}
                                    />  
                    } 
                })}
            </div>
        </div>
    )
}
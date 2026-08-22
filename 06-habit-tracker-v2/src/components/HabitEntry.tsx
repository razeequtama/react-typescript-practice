import { useHabitListSetContext } from "../context/HabitEntryListSetContext"

export type HabitEntryType = {
    date?: string,
    isDone?: boolean
}

export default function HabitEntry({date, isDone, day}: HabitEntryType & {day: string})
{
    const {setHabitEntryListSet} = useHabitListSetContext();

    // FIX HERE
    return <button className={`cursor-pointer px-3 py-2 ${isDone ? `bg-blue-600 hover:bg-blue-900` : `bg-blue-900  hover:bg-blue-600`} text-amber-50 rounded-3xl transition-all`}>
        {day} {date}
        </button>
}
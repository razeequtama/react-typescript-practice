export type HabitEntryType = {
    date?: string,
    isDone?: boolean
    toggleClick?: (dateString: string) => void
}

export default function HabitEntry({date, isDone, day, toggleClick}: HabitEntryType & {day: string})
{

    // FIX HERE
    return <button 
                className={`cursor-pointer px-3 py-2 text-amber-50 rounded-3xl transition-all
                            ${isDone ? `bg-blue-600 hover:bg-blue-900` : `bg-blue-900  hover:bg-blue-600`}
                            `}
                onClick={() => toggleClick?.(date ?? "")}
                >
                    {day} {date?.split("/")[1]}
        </button>
}
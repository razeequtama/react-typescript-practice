type HabitEntryType = {
    day: string,
    date: number
}

export default function HabitEntry({day, date}: HabitEntryType)
{
    return <button>{day} {date}</button>    
}
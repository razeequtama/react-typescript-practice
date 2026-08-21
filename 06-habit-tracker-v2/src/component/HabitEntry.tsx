export type HabitEntryType = {
    day: string
    date: string
    isDone: boolean
}

export default function HabitEntry({day, date, isDone}: HabitEntryType)
{
    return <button className="habit">{day} {date} {isDone ? "True" : "False"}</button>    
}
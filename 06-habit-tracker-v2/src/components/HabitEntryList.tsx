import type { HabitEntryType } from "./HabitEntry"

export type HabitEntryListType = {
    id: number,
    habitName: string,
    habitEntryList: HabitEntryType[]
}
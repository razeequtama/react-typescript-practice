import type { HabitEntryType } from "../component/HabitEntry"
import { type SetStateAction, type Dispatch, createContext, type ReactNode, useState, useContext } from "react"

// type HabitEntryType = {
//     day: string
//     date: string
//     isDone?: boolean
// }

export type HabitSetType = {
    id: number,
    habitName: string,
    habitList: HabitEntryType[]
}

export type HabitContextType = {
    habitSet: HabitSetType[],
    setHabitSet: Dispatch<SetStateAction<HabitSetType[]>>
}

export const HabitContext = createContext<HabitContextType | null>(null);

export function useHabitContext()
{
    const context = useContext(HabitContext);
    if(!context) throw new Error ("HabitContext returns null! Use HabitContext in front of a provider!");
    return context;

}

export function HabitContextProvider({children}: {children: ReactNode})
{
    const [habitSet, setHabitSet] = useState<HabitSetType[]>([]);

    return(
        <HabitContext.Provider value={{habitSet, setHabitSet}}>
            {children}
        </HabitContext.Provider>
    )
}
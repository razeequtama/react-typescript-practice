import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"
import { type HabitEntryListType } from "../components/HabitEntryList"

type HabitEntryListSetContextType = {
    habitEntryListSet: HabitEntryListType[],
    setHabitEntryListSet: Dispatch<SetStateAction<HabitEntryListType[]>>
}

export const HabitEntryListSetContext = createContext<HabitEntryListSetContextType | null>(null);

export function useHabitListSetContext()
{
    const context = useContext(HabitEntryListSetContext);
    if(!context) throw new Error ("HabitEntryListSetContext is null! Please use it inside of a provider!");
    return context;
}

export function HabitEntryListSetContextProvider({children}: {children: ReactNode})
{
    const [habitEntryListSet, setHabitEntryListSet] = useState<HabitEntryListType[]>([]);

    return(
        <HabitEntryListSetContext.Provider value={{habitEntryListSet, setHabitEntryListSet}}>
            {children}
        </HabitEntryListSetContext.Provider>
    )
}
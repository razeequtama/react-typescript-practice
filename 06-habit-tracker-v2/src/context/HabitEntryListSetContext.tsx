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
        const mockHabitEntryListSet: HabitEntryListType[] = [
        {
            id: 1,
            habitName: "Drink Water",
            habitEntryList: [
                // Previous week: Sunday 8/9 - Saturday 8/15
                { date: "8/9/2026", isDone: true },
                { date: "8/10/2026", isDone: true },
                { date: "8/11/2026", isDone: false },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week: Sunday 8/16 - Saturday 8/22
                { date: "8/16/2026", isDone: true },
                { date: "8/17/2026", isDone: false },
                { date: "8/18/2026", isDone: true },
                { date: "8/19/2026", isDone: false },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: true },

                // Next week: Sunday 8/23 - Saturday 8/29
                { date: "8/23/2026", isDone: true },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: true },
                { date: "8/26/2026", isDone: true },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: false },
                { date: "8/29/2026", isDone: false },
            ],
        },
        {
            id: 2,
            habitName: "Exercise",
            habitEntryList: [
                // Previous week
                { date: "8/9/2026", isDone: false },
                { date: "8/10/2026", isDone: true },
                { date: "8/11/2026", isDone: false },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week
                { date: "8/16/2026", isDone: false },
                { date: "8/17/2026", isDone: true },
                { date: "8/18/2026", isDone: true },
                { date: "8/19/2026", isDone: false },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: false },

                // Next week
                { date: "8/23/2026", isDone: true },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: false },
                { date: "8/26/2026", isDone: false },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: true },
                { date: "8/29/2026", isDone: true },
            ],
        },
        {
            id: 3,
            habitName: "Read a Book",
            habitEntryList: [
                // Previous week
                { date: "8/9/2026", isDone: true },
                { date: "8/10/2026", isDone: false },
                { date: "8/11/2026", isDone: true },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week
                { date: "8/16/2026", isDone: true },
                { date: "8/17/2026", isDone: false },
                { date: "8/18/2026", isDone: false },
                { date: "8/19/2026", isDone: true },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: true },

                // Next week
                { date: "8/23/2026", isDone: false },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: false },
                { date: "8/26/2026", isDone: true },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: true },
                { date: "8/29/2026", isDone: true },
            ],
        }
    ];

    const [habitEntryListSet, setHabitEntryListSet] = useState<HabitEntryListType[]>(mockHabitEntryListSet);

    return(
        <HabitEntryListSetContext.Provider value={{habitEntryListSet, setHabitEntryListSet}}>
            {children}
        </HabitEntryListSetContext.Provider>
    )
}
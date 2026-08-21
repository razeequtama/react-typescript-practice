import {createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type DateContextType = {
    date: Date,
    setDate: Dispatch<SetStateAction<Date>>,
    dateTrack: Date,
    setDateTrack: Dispatch<SetStateAction<Date>>
}

export function useDateContext()
{
    const context = useContext(DateContext);
    if(!context) throw new Error ("DateContext returns null! Use DateContext inside of a provider!");
    return context;
}

export const DateContext = createContext<DateContextType | null>(null);

export function DateContextProvider({children}: {children: ReactNode})
{
    const [date, setDate] = useState(new Date());
    const [dateTrack, setDateTrack] = useState(new Date(date));

    return(
        <DateContext.Provider value={{date, setDate, dateTrack, setDateTrack}}>
            {children}
        </DateContext.Provider>
    )
}
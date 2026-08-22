import { createContext, useCallback, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type DateContextType = {
    date: Date,
    setDate: Dispatch<SetStateAction<Date>>,
    dateTrack: Date,
    setDateTrack: Dispatch<SetStateAction<Date>>
}

export const DateContext = createContext<DateContextType | null>(null);

export function useDateContext()
{
    const context = useContext(DateContext);
    if(!context) throw new Error ("DateContext is null! Please use it inside of a provider!");
    return context;
}

export function DateContextProvider({children}: {children: ReactNode})
{
    const [date, setDate] = useState<Date>(new Date());
    const [dateTrack, setDateTrack] = useState<Date>(new Date());

    return(
        <DateContext.Provider value={{date, setDate, dateTrack, setDateTrack}}>
            {children}
        </DateContext.Provider>
    )
}
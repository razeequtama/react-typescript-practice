import { useState, createContext, useContext } from "react";
import { ReactNode } from "react";

export type ExpenseContextType = {
    expense: number,
    setExpense: (value: number) => void
}

export const ExpenseContext = createContext<ExpenseContextType | null>(null);

export function useExpense()
{
    const context = useContext(ExpenseContext);
    if (context === null) {
        throw new Error("useExpense must be used inside ExpenseContextProvider");
    }

    return context;
    
}

export default function ExpenseContextProvider({children}: {children: ReactNode})
{
    const [expense, setExpense] = useState(1000000);

    return(
        <ExpenseContext.Provider value={{expense, setExpense}}>
            {children}
        </ExpenseContext.Provider>
    )
}
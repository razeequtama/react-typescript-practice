import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { ReactNode } from "react";

export type ExpenseEntryType = {
    name: string
    type: "Expense" | "Income"
    category: "Food" | "Transportation" | "Housing & Essentials" | "Shopping" | "Entertainment"
    amount: number
}

type ExpenseContextType = {
    expense: number,
    setExpense: (value: number) => void,
    expenseEntryList: ExpenseEntryType[],
    setExpenseEntryList: Dispatch<SetStateAction<ExpenseEntryType[]>>;
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
    const [expense, setExpense] = useState(0);
    const [expenseEntryList, setExpenseEntryList] = useState<ExpenseEntryType[]>([]);

    return(
        <ExpenseContext.Provider value={{expense, setExpense, expenseEntryList, setExpenseEntryList}}>
            {children}
        </ExpenseContext.Provider>
    )
}
# Expense Analyzer

Input transactions:

```
Food       -50
Transport  -20
Salary    +500
Games      -30
```

Display:

```
Balance: $400

Food       $50
Transport  $20
Games      $30
```

Add filtering by:

- category
- income/expense
- date

### React

Learn:

- derived state
- `useMemo`

But here's the rule:

**Don't use `useMemo` just because I know it exists.**

First make it work normally.

Then ask:

> "Is there actually an expensive calculation here?"

That's the mindset I want.

### TypeScript

Learn:

- Inserting properties into objects.

For example:

```tsx
type ExpenseEntryType = {
    name: string
    type: "expense" | "income"
    category: "food" | "transportation" | "housing" | "shpopping" | "entertainment"
    amount: number
}
```

# Version
## Version 1
/components/EntryForm.tsx
```tsx
import { useEffect, useMemo } from "react";
import { useExpense } from "../context/ExpenseContext";
import type { ExpenseEntryType } from "../context/ExpenseContext";

export default function EntryForm()
{
    const {setExpense, expenseEntryList, setExpenseEntryList} = useExpense();

    // ===useMemo WILL ONLY RE-RENDER OR "CHANGE" OR EVEN "BREATHE" WHENEVER THE VALUE AT THE DEPENDENCY ARRAY CHANGES===
    const totalExpense = useMemo(() => {
        let accumulation = expenseEntryList.filter(entry => entry.type == "Expense").map(entry => entry.amount).reduce((total, amount) => {
            return total + amount
        }, 0)

        return accumulation;
    }, [expenseEntryList])

    const totalIncome = useMemo(() => {
        let accumulation = expenseEntryList.filter(entry => entry.type == "Income").map(entry => entry.amount).reduce((total, amount) => {
            return total + amount
        }, 0)

        return accumulation;
    }, [expenseEntryList])

    const totalSaving = useMemo(() => {
        return totalIncome - totalExpense
    }, [totalIncome, totalExpense])

    useEffect(() => {
        setExpense(totalSaving);
    }, [totalSaving])

    function handleSubmission(event: React.FormEvent<HTMLFormElement>)
    {
        let newEntry: ExpenseEntryType = {
            name: "",
            type: "Expense",
            category: "Food",
            amount: 0
        };

        event.preventDefault();

        // ===PICK THE NAME===
        // Pick the name field's input
        const nameInput = document.querySelector<HTMLInputElement>(`input[name="name"]`);
        // Pick the name field's input, [data type = string].
        const nameExtract = nameInput?.value ?? "";
        newEntry.name = nameExtract;
        console.log(nameExtract);

        // ===PICK THE AMOUNT===
        // Pick the amount field's input AS a number
        const amountInput = document.querySelector<HTMLInputElement>(`input[name="amount"]`);
        // Extract the amount input's value, [data type = number].
        const amountExtract = Number(amountInput?.value) ?? 0;
        newEntry.amount = amountExtract;
        console.log(amountExtract)

        // ===PICK THE CATEGORY===
        // Pick the category field's input
        const categoryInput = document.querySelector<HTMLInputElement>(`select`);
        // Extract the amount input's value, [data type = string].
        const categoryExtract = categoryInput?.value as "Food" | "Transportation" | "Housing & Essentials" | "Shopping" | "Entertainment"
        newEntry.category = categoryExtract;
        console.log(categoryExtract);

        // ===PICK THE TYPE===
        // Pick the type field's input
        const typeInput = document.querySelector<HTMLInputElement>("label > input:checked");
        // Extract the type field's value, [data type = string].
        const typeExtract = typeInput?.getAttribute("value") as "Expense" | "Income"
        newEntry.type = typeExtract;
        console.log(typeExtract);
        
        setExpenseEntryList(prev => {
            return [...prev, newEntry];
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmission}>
                
                {/* Name selection */}
                <h3>Name</h3>
                <input type="text" name="name" required/>
                <br />

                {/* Amount selection */}
                <h3>Amount</h3>
                <input type="number" min={500} name="amount" defaultValue={500} />
                <br />

                {/* Category selection */}
                <h3>Category</h3>
                <select name="category" defaultValue={""}>
                    <option value="" disabled>Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Housing & Essentials">Housing & Essentials</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

                {/* Type selection -> Expense or Income */}
                <h3>Type: </h3>
                <label htmlFor="type">
                    <input type="radio" name="type" value={`Expense`} required/>
                    Expense
                </label>
                <label htmlFor="type">
                    <input type="radio" name="type" value={`Income`} required/>
                    Income
                </label>

                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
```
components/Expense.tsx
```tsx
import { useExpense } from "../context/ExpenseContext";

export default function Expense()
{
    const {expense} = useExpense();

    return <h1>Saving: {expense}</h1>
}
```
components/ExpenseEntryList.tsx
```tsx
import { useExpense } from "../context/ExpenseContext"

export default function ExpenseEntryList()
{

    const {expenseEntryList} = useExpense();

    return(
        <div>
            {expenseEntryList.length === 0 ?
                <p>No entries at the moment. Add one!</p>
                : 
                expenseEntryList.map(entry => {
                    return (
                        <div>
                            <h4>{entry.name}</h4>
                            <p>Amount: {entry.amount}</p>
                            <p>Type: {entry.type}</p>
                        </div>
                    )
                })
            }
        </div>
    )

}
```
context/ExpenseContext.tsx
```tsx
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
```

# What I learned
- I have to be very considerate over the fact that I'd have to use useContext with nulls during initialization. So an if statement checking it would be necessary sometimes.
- Making a function in the context file and importing that to use it makes useContext so much easier to understand.
Function:
```tsx
export function useExpense()
{
    const context = useContext(ExpenseContext);
    if (context === null) {
        throw new Error("useExpense must be used inside ExpenseContextProvider");
    }

    return context;   
}
```
Usage:
```tsx
const {expense, setExpense} = useExpense();
```
- defaultValue exists as an HTML attribute
- with "?" in an HTML input selection means adding the possibility that it's gonna be null. The solution is to give a fallback if I want to append it's value. Example.
```tsx
// ===PICK THE NAME===
// Pick the name field's input
const nameInput = document.querySelector<HTMLInputElement>(`input[name="name"]`);
// Pick the name field's input, [data type = string].
const nameExtract = nameInput?.value ?? ""; // <- The fallback is ?? ""
newEntry.name = nameExtract;
console.log(nameExtract);
```
Or in type aliases
```tsx
// ===PICK THE CATEGORY===
// Pick the category field's input
const categoryInput = document.querySelector<HTMLInputElement>(`select`);
// Extract the amount input's value, [data type = string].
const categoryExtract = categoryInput?.value as "food" | "transportation" | "housing" | "shopping" | "entertainment";
newEntry.category = categoryExtract;
console.log(categoryExtract);
```

# Result
![alt text](docs/docs_gif.gif)
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
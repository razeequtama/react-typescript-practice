import { useExpense } from "../context/ExpenseContext";

export default function Expense()
{
    const {expense} = useExpense();

    return <h1>{expense}</h1>
}
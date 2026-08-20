import { useExpense } from "../context/ExpenseContext";

export default function Expense()
{
    const {expense, setExpense} = useExpense();

    return(
        <>
            <h1>{expense}</h1>
            <button onClick={() => {if(expense === 0) return; setExpense(expense - 100000);}}>Decrease</button>
        </>

    )
    
}
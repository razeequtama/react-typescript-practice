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
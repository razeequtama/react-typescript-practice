import ExpenseContextProvider from "./context/ExpenseContext"
import Expense from "./components/Expense"
import Tracker from "./components/Tracker"

export default function App()
{
  return(
    <ExpenseContextProvider>
      <Tracker />
    </ExpenseContextProvider>
  )
}
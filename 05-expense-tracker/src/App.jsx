import ExpenseContextProvider from "./context/ExpenseContext"
import Expense from "./components/Expense"
import ExpenseEntryList from "./components/ExpenseEntryList"
import EntryForm from "./components/EntryForm"

export default function App()
{
  return(
    <ExpenseContextProvider>
      <Expense />
      <EntryForm />
      <ExpenseEntryList />
    </ExpenseContextProvider>
  )
}
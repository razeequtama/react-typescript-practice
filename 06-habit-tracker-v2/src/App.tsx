import { DateContextProvider } from "./context/DateContext";
import Test from "./component/Header";
import HabitList from "./component/HabitList";
import "./App.css"

export default function App()
{
  return(
    <DateContextProvider>
      <Test/>
      <HabitList />
    </DateContextProvider>
  )
}
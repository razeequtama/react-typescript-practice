import { DateContextProvider } from "./context/DateContext";
import { HabitContextProvider } from "./context/HabitContext";
import Header from "./component/Header";
import HabitEntryListSet from "./component/HabitEntryListSet";
import "./App.css"

export default function App()
{
  return(
    <HabitContextProvider>
    <DateContextProvider>
      <Header />
      <HabitEntryListSet/>
    </DateContextProvider>
    </HabitContextProvider>
  )
}
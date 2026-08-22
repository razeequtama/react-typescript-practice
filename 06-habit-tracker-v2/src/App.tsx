import { HabitEntryListSetContextProvider } from "./context/HabitEntryListSetContext"
import { DateContextProvider } from "./context/DateContext"
import Header from "./components/Header"
import HabitEntryListSet from "./components/HabitEntryListSet"
import "./App.css"

export default function App()
{
  return(
    <div>
      <DateContextProvider>
      <HabitEntryListSetContextProvider>
        <Header/>
        <HabitEntryListSet />
      </HabitEntryListSetContextProvider>
      </DateContextProvider>
    </div>
    
  )
}

/*
  ================================
  --------------------------------
  Plan:
  --------------------------------
  ================================

  Entire tracker data structure:
  ======================
  1. habitEntry
  ======================
  HabitEntryType:
  {
    date: string (ex: 5/25/2005) (use toLocaleString)
    isDone: boolean (ex: true)
  }


  ======================
  2. habitEntryList
  ======================
  HabitEntryListType:
  {
    id: number,
    habitName: string,
    habitEntryList: HabitEntryType[]
  }

  ======================
  3. habitEntryListSet
  ======================
  HabitEntryListSetType: HabitEntryListType[]

  ================================
  --------------------------------
  Adding habitEntryListSet:
  --------------------------------
  ================================

  From a component that has a field input for the habit's name and an "add" button, if the button is clicked"
  1. Pick the current habitEntryListSet's highest id number (using Math.max)
  2. Extracting the input's name
  3. Initializes the habitEntryList as an empty array.
  Set it.

  ================================
  --------------------------------
  Mapping:
  --------------------------------
  ================================

  Example habitEntryListSet:
  {
    id: 1,
    habitName: "Drink Water",
    habitEntryList: [
      { date: "8/18/2026", isDone: true },
      { date: "8/19/2026", isDone: true },
      { date: "8/20/2026", isDone: false },
      { date: "8/21/2026", isDone: true },
      { date: "8/22/2026", isDone: true },
    ],
  },
  {
    id: 2,
    habitName: "Exercise",
    habitEntryList: [
      { date: "8/18/2026", isDone: true },
      { date: "8/19/2026", isDone: false },
      { date: "8/20/2026", isDone: true },
      { date: "8/21/2026", isDone: true },
      { date: "8/22/2026", isDone: false },
    ],
  },
  {
    id: 3,
    habitName: "Read a Book",
    habitEntryList: [
      { date: "8/18/2026", isDone: false },
      { date: "8/19/2026", isDone: true },
      { date: "8/20/2026", isDone: true },
      { date: "8/21/2026", isDone: true },
      { date: "8/22/2026", isDone: true },
    ],
  },
  {
    id: 4,
    habitName: "Meditate",
    habitEntryList: [
      { date: "8/18/2026", isDone: true },
      { date: "8/19/2026", isDone: true },
      { date: "8/20/2026", isDone: true },
      { date: "8/21/2026", isDone: false },
      { date: "8/22/2026", isDone: true },
    ],
  },
  {
    id: 5,
    habitName: "Sleep Before 11 PM",
    habitEntryList: [
      { date: "8/18/2026", isDone: false },
      { date: "8/19/2026", isDone: false },
      { date: "8/20/2026", isDone: true },
      { date: "8/21/2026", isDone: true },
      { date: "8/22/2026", isDone: true },
    ],
  };

  1. Make a component that can change weeks to next week or previous week.
  2. Find the current date.
  3. Extract the start of the week date all the way until the end of the week's date.
  For each date, map the:
  NAME
  [MONDAY (date)] [TUESDAY (date)] [...] [...] [...] [...] [...]
  4.  For EVERY untouched/unitialized habitEntry, show the isDone to false. ONLY make a habitEntry when the user clicks it.

  So, no click:
  --------------
  no habitEntry on that date, but shown to be false.

  First click:
  --------------
  { date: (date), isDone: true }

  Seconc click:
  { date: (date), isDone: false }

*/

/*



*/
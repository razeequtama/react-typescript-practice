import { useHabitListSetContext } from "../context/HabitEntryListSetContext"
import type { HabitEntryListType } from "./HabitEntryList"

export default function AddHabit()
{

    const {habitEntryListSet, setHabitEntryListSet} = useHabitListSetContext();

    const newHabitEntryList: HabitEntryListType = {
        id: 0,
        habitName: "",
        habitEntryList: []
    }

    function addNewHabitList(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault()

        const form = event.currentTarget;
        const newHabitName = form["new-habit-name"].value

        newHabitEntryList.habitName = newHabitName;

        let newId;

        if(habitEntryListSet.length === 0) newId = 0;
        else newId = (Math.max(...habitEntryListSet.map(entry => entry.id)) + 1);

        newHabitEntryList.id = newId

        setHabitEntryListSet(prev => {
            return [...prev, newHabitEntryList]
        })
    }

    return(
        <div className="flex justify-between max-w-3xl px-4 py-2">
            <form onSubmit={addNewHabitList}>
                <input name="new-habit-name" type="text" placeholder="Insert new habit..." />
                <button type="submit" className={`cursor-pointer px-3 py-2 text-amber-50 rounded-3xl bg-blue-900 hover:bg-blue-700 transition-all`}>Add</button>
            </form>
        </div>
    )
}
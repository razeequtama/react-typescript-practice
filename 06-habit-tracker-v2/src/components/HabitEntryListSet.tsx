import { useDateContext } from "../context/DateContext";
import { useHabitListSetContext } from "../context/HabitEntryListSetContext";
import HabitEntryList, { type HabitEntryListType } from "./HabitEntryList";
import { months } from "../data/timeNames";

export default function HabitEntryListSet()
{
    const {habitEntryListSet} = useHabitListSetContext();
    const {dateTrack} = useDateContext();

    const mockHabitEntryListSet: HabitEntryListType[] = [
        {
            id: 1,
            habitName: "Drink Water",
            habitEntryList: [
                // Previous week: Sunday 8/9 - Saturday 8/15
                { date: "8/9/2026", isDone: true },
                { date: "8/10/2026", isDone: true },
                { date: "8/11/2026", isDone: false },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week: Sunday 8/16 - Saturday 8/22
                { date: "8/16/2026", isDone: true },
                { date: "8/17/2026", isDone: true },
                { date: "8/18/2026", isDone: true },
                { date: "8/19/2026", isDone: false },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: true },

                // Next week: Sunday 8/23 - Saturday 8/29
                { date: "8/23/2026", isDone: true },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: true },
                { date: "8/26/2026", isDone: true },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: false },
                { date: "8/29/2026", isDone: false },
            ],
        },
        {
            id: 2,
            habitName: "Exercise",
            habitEntryList: [
                // Previous week
                { date: "8/9/2026", isDone: false },
                { date: "8/10/2026", isDone: true },
                { date: "8/11/2026", isDone: false },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week
                { date: "8/16/2026", isDone: false },
                { date: "8/17/2026", isDone: true },
                { date: "8/18/2026", isDone: true },
                { date: "8/19/2026", isDone: false },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: false },

                // Next week
                { date: "8/23/2026", isDone: true },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: false },
                { date: "8/26/2026", isDone: false },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: true },
                { date: "8/29/2026", isDone: true },
            ],
        },
        {
            id: 3,
            habitName: "Read a Book",
            habitEntryList: [
                // Previous week
                { date: "8/9/2026", isDone: true },
                { date: "8/10/2026", isDone: false },
                { date: "8/11/2026", isDone: true },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week
                { date: "8/16/2026", isDone: true },
                { date: "8/17/2026", isDone: false },
                { date: "8/18/2026", isDone: false },
                { date: "8/19/2026", isDone: true },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: true },

                // Next week
                { date: "8/23/2026", isDone: false },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: false },
                { date: "8/26/2026", isDone: true },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: true },
                { date: "8/29/2026", isDone: true },
            ],
        },
        {
            id: 4,
            habitName: "Meditate",
            habitEntryList: [
                // Previous week
                { date: "8/9/2026", isDone: true },
                { date: "8/10/2026", isDone: true },
                { date: "8/11/2026", isDone: true },
                { date: "8/12/2026", isDone: false },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: true },
                { date: "8/15/2026", isDone: false },

                // Current week
                { date: "8/16/2026", isDone: true },
                { date: "8/17/2026", isDone: true },
                { date: "8/18/2026", isDone: true },
                { date: "8/19/2026", isDone: true },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: false },
                { date: "8/22/2026", isDone: true },

                // Next week
                { date: "8/23/2026", isDone: false },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: true },
                { date: "8/26/2026", isDone: true },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: false },
                { date: "8/29/2026", isDone: false },
            ],
        },
        {
            id: 5,
            habitName: "Sleep Before 11 PM",
            habitEntryList: [
                // Previous week
                { date: "8/9/2026", isDone: false },
                { date: "8/10/2026", isDone: false },
                { date: "8/11/2026", isDone: true },
                { date: "8/12/2026", isDone: true },
                { date: "8/13/2026", isDone: true },
                { date: "8/14/2026", isDone: false },
                { date: "8/15/2026", isDone: true },

                // Current week
                { date: "8/16/2026", isDone: false },
                { date: "8/17/2026", isDone: false },
                { date: "8/18/2026", isDone: false },
                { date: "8/19/2026", isDone: true },
                { date: "8/20/2026", isDone: true },
                { date: "8/21/2026", isDone: true },
                { date: "8/22/2026", isDone: true },

                // Next week
                { date: "8/23/2026", isDone: false },
                { date: "8/24/2026", isDone: false },
                { date: "8/25/2026", isDone: true },
                { date: "8/26/2026", isDone: false },
                { date: "8/27/2026", isDone: true },
                { date: "8/28/2026", isDone: true },
                { date: "8/29/2026", isDone: false },
            ],
        },
    ];

    function getWeekStartDateString(index: number)
    {
        const startWeekDate = new Date(dateTrack);
        startWeekDate.setDate(startWeekDate.getDate() - startWeekDate.getDay() + index);
        return startWeekDate.toLocaleDateString();
    }

    function getStartOfWeek()
    {
        const startWeekDate = new Date(dateTrack);
        startWeekDate.setDate(startWeekDate.getDate() - startWeekDate.getDay());
        return startWeekDate;
    }

    function getEndOfWeek()
    {
        const endWeekDate = new Date(dateTrack);
        endWeekDate.setDate(endWeekDate.getDate() + (7 - endWeekDate.getDay()));
        return endWeekDate;
    }

    return(
        <div className="flex-col max-w-3xl">
            <div className="flex justify-between px-4 py-2">
                <h3>{months[getStartOfWeek().getMonth()]} {getStartOfWeek().getFullYear()}</h3>
                <h3>{months[getEndOfWeek().getMonth()]} {getEndOfWeek().getFullYear()}</h3>
            </div>
            <div className="px-4 py-2">
                {mockHabitEntryListSet.length === 0 ?
                    <p>There are currently no habits! Add one to get started!</p>
                    :
                    mockHabitEntryListSet.map(habitEntryList => {
                        return(
                            <div key={habitEntryList.id} className="max-w-4xl">
                                <h1 className="font-bold text-2xl">{habitEntryList.habitName}</h1>
                                <HabitEntryList id={habitEntryList.id} habitName={habitEntryList.habitName} habitEntryList={habitEntryList.habitEntryList}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
import HabitEntryList from "./HabitEntryList";
import type { HabitSetType } from "../context/HabitContext";

export default function HabitEntryListSet()
{

    const mockHabitSet: HabitSetType[] = [
        {
            id: 1,
            habitName: "Exercise",
            habitList: [
                // Week -2
                { day: "Sunday", date: "8/2/2026", isDone: true },
                { day: "Monday", date: "8/3/2026", isDone: false },
                { day: "Tuesday", date: "8/4/2026", isDone: true },
                { day: "Wednesday", date: "8/5/2026", isDone: false },
                { day: "Thursday", date: "8/6/2026", isDone: true },
                { day: "Friday", date: "8/7/2026", isDone: false },
                { day: "Saturday", date: "8/8/2026", isDone: true },

                // Week -1
                { day: "Sunday", date: "8/9/2026", isDone: true },
                { day: "Monday", date: "8/10/2026", isDone: false },
                { day: "Tuesday", date: "8/11/2026", isDone: true },
                { day: "Wednesday", date: "8/12/2026", isDone: true },
                { day: "Thursday", date: "8/13/2026", isDone: false },
                { day: "Friday", date: "8/14/2026", isDone: true },
                { day: "Saturday", date: "8/15/2026", isDone: false },

                // Current week
                { day: "Sunday", date: "8/16/2026", isDone: true },
                { day: "Monday", date: "8/17/2026", isDone: true },
                { day: "Tuesday", date: "8/18/2026", isDone: false },
                { day: "Wednesday", date: "8/19/2026", isDone: true },
                { day: "Thursday", date: "8/20/2026", isDone: false },
                { day: "Friday", date: "8/21/2026", isDone: false },
                { day: "Saturday", date: "8/22/2026", isDone: true },

                // Week +1
                { day: "Sunday", date: "8/23/2026", isDone: false },
                { day: "Monday", date: "8/24/2026", isDone: true },
                { day: "Tuesday", date: "8/25/2026", isDone: true },
                { day: "Wednesday", date: "8/26/2026", isDone: false },
                { day: "Thursday", date: "8/27/2026", isDone: true },
                { day: "Friday", date: "8/28/2026", isDone: false },
                { day: "Saturday", date: "8/29/2026", isDone: true },

                // Week +2
                { day: "Sunday", date: "8/30/2026", isDone: true },
                { day: "Monday", date: "8/31/2026", isDone: false },
                { day: "Tuesday", date: "9/1/2026", isDone: true },
                { day: "Wednesday", date: "9/2/2026", isDone: true },
                { day: "Thursday", date: "9/3/2026", isDone: false },
                { day: "Friday", date: "9/4/2026", isDone: true },
                { day: "Saturday", date: "9/5/2026", isDone: false },
            ],
        },

        {
            id: 2,
            habitName: "Read",
            habitList: [
                // Week -2
                { day: "Sunday", date: "8/2/2026", isDone: false },
                { day: "Monday", date: "8/3/2026", isDone: true },
                { day: "Tuesday", date: "8/4/2026", isDone: true },
                { day: "Wednesday", date: "8/5/2026", isDone: false },
                { day: "Thursday", date: "8/6/2026", isDone: true },
                { day: "Friday", date: "8/7/2026", isDone: false },
                { day: "Saturday", date: "8/8/2026", isDone: true },

                // Week -1
                { day: "Sunday", date: "8/9/2026", isDone: false },
                { day: "Monday", date: "8/10/2026", isDone: true },
                { day: "Tuesday", date: "8/11/2026", isDone: true },
                { day: "Wednesday", date: "8/12/2026", isDone: false },
                { day: "Thursday", date: "8/13/2026", isDone: true },
                { day: "Friday", date: "8/14/2026", isDone: false },
                { day: "Saturday", date: "8/15/2026", isDone: true },

                // Current week
                { day: "Sunday", date: "8/16/2026", isDone: false },
                { day: "Monday", date: "8/17/2026", isDone: true },
                { day: "Tuesday", date: "8/18/2026", isDone: true },
                { day: "Wednesday", date: "8/19/2026", isDone: false },
                { day: "Thursday", date: "8/20/2026", isDone: true },
                { day: "Friday", date: "8/21/2026", isDone: true },
                { day: "Saturday", date: "8/22/2026", isDone: false },

                // Week +1
                { day: "Sunday", date: "8/23/2026", isDone: true },
                { day: "Monday", date: "8/24/2026", isDone: false },
                { day: "Tuesday", date: "8/25/2026", isDone: true },
                { day: "Wednesday", date: "8/26/2026", isDone: true },
                { day: "Thursday", date: "8/27/2026", isDone: false },
                { day: "Friday", date: "8/28/2026", isDone: true },
                { day: "Saturday", date: "8/29/2026", isDone: false },

                // Week +2
                { day: "Sunday", date: "8/30/2026", isDone: true },
                { day: "Monday", date: "8/31/2026", isDone: true },
                { day: "Tuesday", date: "9/1/2026", isDone: false },
                { day: "Wednesday", date: "9/2/2026", isDone: true },
                { day: "Thursday", date: "9/3/2026", isDone: false },
                { day: "Friday", date: "9/4/2026", isDone: true },
                { day: "Saturday", date: "9/5/2026", isDone: true },
            ],
        },

        {
            id: 3,
            habitName: "Drink Water",
            habitList: [
                // Week -2
                { day: "Sunday", date: "8/2/2026", isDone: true },
                { day: "Monday", date: "8/3/2026", isDone: true },
                { day: "Tuesday", date: "8/4/2026", isDone: false },
                { day: "Wednesday", date: "8/5/2026", isDone: true },
                { day: "Thursday", date: "8/6/2026", isDone: true },
                { day: "Friday", date: "8/7/2026", isDone: false },
                { day: "Saturday", date: "8/8/2026", isDone: true },

                // Week -1
                { day: "Sunday", date: "8/9/2026", isDone: true },
                { day: "Monday", date: "8/10/2026", isDone: true },
                { day: "Tuesday", date: "8/11/2026", isDone: false },
                { day: "Wednesday", date: "8/12/2026", isDone: true },
                { day: "Thursday", date: "8/13/2026", isDone: true },
                { day: "Friday", date: "8/14/2026", isDone: false },
                { day: "Saturday", date: "8/15/2026", isDone: true },

                // Current week
                { day: "Sunday", date: "8/16/2026", isDone: true },
                { day: "Monday", date: "8/17/2026", isDone: true },
                { day: "Tuesday", date: "8/18/2026", isDone: true },
                { day: "Wednesday", date: "8/19/2026", isDone: false },
                { day: "Thursday", date: "8/20/2026", isDone: true },
                { day: "Friday", date: "8/21/2026", isDone: false },
                { day: "Saturday", date: "8/22/2026", isDone: true },

                // Week +1
                { day: "Sunday", date: "8/23/2026", isDone: true },
                { day: "Monday", date: "8/24/2026", isDone: true },
                { day: "Tuesday", date: "8/25/2026", isDone: false },
                { day: "Wednesday", date: "8/26/2026", isDone: true },
                { day: "Thursday", date: "8/27/2026", isDone: true },
                { day: "Friday", date: "8/28/2026", isDone: false },
                { day: "Saturday", date: "8/29/2026", isDone: true },

                // Week +2
                { day: "Sunday", date: "8/30/2026", isDone: false },
                { day: "Monday", date: "8/31/2026", isDone: true },
                { day: "Tuesday", date: "9/1/2026", isDone: true },
                { day: "Wednesday", date: "9/2/2026", isDone: false },
                { day: "Thursday", date: "9/3/2026", isDone: true },
                { day: "Friday", date: "9/4/2026", isDone: true },
                { day: "Saturday", date: "9/5/2026", isDone: false },
            ],
        },
    ];



    return(
        <div>
            {mockHabitSet.map(set => {
                // return <HabitEntryList habitName={set.habitName} weekStartDate={set.habitList[0].date} isDone={set.habitList[0].isDone}/>
                return <HabitEntryList habitSet={set}/>
            })}
        </div>
    )

}
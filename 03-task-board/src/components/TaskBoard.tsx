import { useState } from "react";
import TaskCard from "./TaskCard"
import type { TaskType, TaskCardType } from "./TaskCard"

export default function TaskBoard()
{
    const [userTasks, setUserTasks] = useState<TaskType[]>([
        {
            id: 1,
            title: "Plan project",
            priority: "low",
            status: "backlog"
        },
        {
            id: 2,
            title: "Design UI",
            priority: "medium",
            status: "progress"
        },
        {
            id: 3,
            title: "Implement authentication",
            priority: "high",
            status: "progress"
        },
        {
            id: 4,
            title: "Write documentation",
            priority: "low",
            status: "backlog"
        },
        {
            id: 5,
            title: "Deploy application",
            priority: "high",
            status: "done"
        }
    ]);

    function handleDelete(id: number): void {
        setUserTasks(tasks => tasks.filter(task => task.id !== id));
    }
    
    function createTask(task: TaskType)
    {
        return(
            <TaskCard 
                task={task}
                onDelete={handleDelete}
            />
        )
    }

    return(
        <>
            {userTasks.map(createTask)}
        </>
    )
}
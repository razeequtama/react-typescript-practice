import TaskCard, { type TaskType } from "./TaskCard";
import { useUserTasks } from "../data/tasks";

export default function TaskColumn({status}: {status: string})
{
    const { userTasks, setUserTasks } = useUserTasks();

    function handleDelete(id: number)
    {
        setUserTasks((tasks) => tasks.filter(task => task.id !== id))
    }

    const selectedTasks = userTasks
        .filter(task => task.status === status)
        .map(task => (
            <TaskCard
                key={task.id}
                task={task}
                onDelete={handleDelete}
            />
        ));

    return(
        <div>
            <h1>{(status.charAt(0).toUpperCase() + status.slice(1))}</h1>
            {selectedTasks.length === 0 ? "No task on this level." : selectedTasks}
        </div>
    )
    
}
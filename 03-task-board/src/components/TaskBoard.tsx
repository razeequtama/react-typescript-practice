import TaskColumn from "./TaskColumn"

export default function TaskBoard()
{
    return(
        <>
            <TaskColumn status="backlog" />
            <TaskColumn status="progress" />
            <TaskColumn status="done" />
        </>
    )
}
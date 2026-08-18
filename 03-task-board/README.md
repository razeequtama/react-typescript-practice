# 3. Task Board

Not a generic Todo app.

Make something more like:

```
BACKLOG       IN PROGRESS       DONE

Research      Build API         Deploy
Design        Write tests       README
```

Each task:

```tsx
type Task = {
    id: string;
    title: string;
    priority: "low" | "medium" | "high";
    status: "backlog" | "progress" | "done";
};
```

### Learn

React:

- components
- props
- lifting state
- list rendering
- keys

TypeScript:

```tsx
type TaskCardProps = {
    task: Task;
    onDelete: (id: string) => void;
};
```

That function typing is **important**.

**Goal:** Become comfortable passing typed data and functions between components.

# Versions
## Version 1
TaskCard.tsx
```tsx
export type TaskType = {
    id: number;
    title: string;
    priority: "low" | "medium" | "high";
    status: "backlog" | "progress" | "done";
};

export type TaskCardType = {
    task: TaskType;
    onDelete: (id: number) => void;
};

export default function TaskCard({ task, onDelete }: TaskCardType) {
    return (
        <div key={task.id}>
            {/* <p>id: {task.id}</p> */}
            <h2>{task.title}</h2>
            <h3>Priority: {task.priority}</h3>
            <p>Status: {task.status}</p>

            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
}
```
TaskBoard.tsx
```tsx
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
            <h1>Backlog</h1>
            {userTasks
                .filter(task => task.status === "backlog")
                .map(createTask)
            }
            
            <h1>Progress</h1>
            {userTasks
                .filter(task => task.status === "progress")
                .map(createTask)
            }
            <h1>Done</h1>
            {userTasks
                .filter(task => task.status === "done")
                .map(createTask)
            }
        </>
    )
}
```

# What I Learned
- .map() determines what gets passed into your callback based on the type/shape of the array you're mapping over.
- I can do arrayVariable.filter().map() to filter specific parts of the array I want to map

# Result
Result video hasn't been made yet.
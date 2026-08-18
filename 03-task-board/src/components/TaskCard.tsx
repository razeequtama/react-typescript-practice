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
        <div>
            <p>id: {task.id}</p>
            <h1>{task.title}</h1>
            <h3>Priority: {task.priority}</h3>
            <p>Status: {task.status}</p>

            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
}
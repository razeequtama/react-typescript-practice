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
            <p>Priority: {task.priority}</p>

            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
}
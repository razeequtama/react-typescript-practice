// hooks/useUserTasks.ts
import { useState } from "react";
import type { TaskType } from "../components/TaskCard";

export const useUserTasks = () => {
  const [userTasks, setUserTasks] = useState<TaskType[]>([
    {
      id: 1,
      title: "Plan project",
      priority: "low",
      status: "backlog",
    },
    {
      id: 2,
      title: "Design UI",
      priority: "medium",
      status: "progress",
    },
    {
      id: 3,
      title: "Implement authentication",
      priority: "high",
      status: "progress",
    },
    {
      id: 4,
      title: "Write documentation",
      priority: "low",
      status: "backlog",
    },
    {
      id: 5,
      title: "Deploy application",
      priority: "high",
      status: "done",
    },
  ]);

  return { userTasks, setUserTasks };
};

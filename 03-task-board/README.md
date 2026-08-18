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
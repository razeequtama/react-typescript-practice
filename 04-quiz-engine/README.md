# Quiz Engine

Build a quiz system.

Not just:

> Question → answer → next.

## Fields
Make it support:

- multiple choice
- true/false
- score
- timer
- question navigation
- results

Now TypeScript gets interesting.

```tsx
type Question =
    | {
        type: "multiple-choice";
        question: string;
        options: string[];
        answer: string;
    }
    | {
        type: "true-false";
        question: string;
        answer: boolean;
    };
```

That's a **discriminated union**.

Then:

```tsx
if (question.type === "multiple-choice") {
    // TypeScript knows options exists
}
```

# Versions
No version is being finished yet.

# What I Learned
- Type narrowing is an option (you can do it with an if statement) if necessary while dealing with union types.

# Result
No result is being recorded yet.
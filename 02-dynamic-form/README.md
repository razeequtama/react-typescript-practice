# Dynamic Form
Build a registration/profile form.
## Fields:
- Name
- Age
- Email
- Country
- Favorite language
- Student/professional
- Skills
Add validation.

The interesting part:
Your form should be represented by an object.

```tsx
type UserForm = {
    name: string;
    age: number;
    email: string;
    country: string;
};
```

## Learn
React:
- controlled inputs
- event handling
- conditional rendering
TypeScript:
- interfaces
- optional properties
- union types

For example:
```tsx
type Status = "student" | "professional";
```

Goal: Stop treating TypeScript as "JavaScript with annotations."
# Expense Analyzer

Input transactions:

```
Food       -50
Transport  -20
Salary    +500
Games      -30
```

Display:

```
Balance: $400

Food       $50
Transport  $20
Games      $30
```

Add filtering by:

- category
- income/expense
- date

### React

Learn:

- derived state
- `useMemo`

But here's the rule:

**Don't use `useMemo` just because you know it exists.**

First make it work normally.

Then ask:

> "Is there actually an expensive calculation here?"

That's the mindset I want.

### TypeScript

Learn:

- Inserting properties into objects.

For example:

```tsx
type ExpenseEntryType = {
    name: string
    type: "expense" | "income"
    category: "food" | "transportation" | "housing" | "shpopping" | "entertainment"
    amount: number
}
```

# Version
There are no version currently.

# What I learned
- I have to be very considerate over the fact that I'd have to use useContext with nulls during initialization. So an if statement checking it would be necessary sometimes.
- Making a function in the context file and importing that to use it makes useContext so much easier to understand.
Function:
```tsx
export function useExpense()
{
    const context = useContext(ExpenseContext);
    if (context === null) {
        throw new Error("useExpense must be used inside ExpenseContextProvider");
    }

    return context;   
}
```
Usage:
```tsx
const {expense, setExpense} = useExpense();
```
- defaultValue exists as an HTML attribute
- with "?" in an HTML input selection means adding the possibility that it's gonna be null. The solution is to give a fallback if I want to append it's value. Example.
```tsx
// ===PICK THE NAME===
// Pick the name field's input
const nameInput = document.querySelector<HTMLInputElement>(`input[name="name"]`);
// Pick the name field's input, [data type = string].
const nameExtract = nameInput?.value ?? ""; // <- The fallback is ?? ""
newEntry.name = nameExtract;
console.log(nameExtract);
```
Or in type aliases
```tsx
// ===PICK THE CATEGORY===
// Pick the category field's input
const categoryInput = document.querySelector<HTMLInputElement>(`select`);
// Extract the amount input's value, [data type = string].
const categoryExtract = categoryInput?.value as "food" | "transportation" | "housing" | "shopping" | "entertainment";
newEntry.category = categoryExtract;
console.log(categoryExtract);
```

# Result
There are no result currently.
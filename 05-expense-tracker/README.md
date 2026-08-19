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
> 

That's the mindset I want.

### TypeScript

Learn:

- `Record`
- `Pick`
- `Omit`
- type aliases

For example:

```tsx
type CategoryTotals = Record<string, number>;
```
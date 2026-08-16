# Counter Lab
Make a counter application that has:
- Increment
- Decrement
- Reset
- Step size
- Min/max values
- History of previous values

## Example:
Counter: 17
[-] [+] [Reset]
Step: [5]
History:
17 → 12 → 7 → 12 → 17

## React
Learn:
- useState()
But more importantly:
- functional state updates
- state initialization
- derived values
- event handlers
- TypeScript

Don't explicitly type everything.

## TypeScript
Let TS infer:

```tsx
const [count, setCount] = useState(0);

Then deliberately type things where appropriate:

const handleIncrement = (): void => {
    ...
};
```

Goal: Understand what React state actually is.

# What I Learned
- When you call a React state setter, React updates the state after the current function finishes.
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

# Versions:
- Version 1:
```tsx
import { useState } from "react";

export default function Counter()
{
    let [count, setCount] = useState(0);
    let [step, setStep] = useState(1);
    let [maxValue, setMax] = useState(count);
    let [minValue, setMin] = useState(count);
    let [history, setHistory] = useState<number[]>([]);


    function add(step: number): void {
        const newCount = count + step;

        setCount(newCount);
        detectMax(newCount);
        addToHistory(newCount);
    }

    function subtract(step: number): void {
        const newCount = count - step;

        setCount(newCount);
        detectMin(newCount);
        addToHistory(newCount);
    }

    function detectMax(newCount: number)
    {
        if(newCount > maxValue) setMax(newCount)
    }

    function detectMin(newCount: number)
    {
        if(newCount < minValue) setMin(newCount)
    }

    function addToHistory(newNumber: number): void 
    {
        setHistory((remainingNumbers) => [...remainingNumbers, newNumber])
    }

    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => add(step)}>+</button>
            <button onClick={() => subtract(step)}>-</button>

            <br />

            <label htmlFor="step">Step: </label>
            <input id="step-input" type="number" name="step"
                onChange={(event) => setStep(Number(event.target.value))}
                value={step} />

            <br />

            <h3>Max Value: {maxValue}</h3>
            <h3>Min Value: {minValue}</h3>

            <p>History: 0 {history.length === 0 ? null : history.map((number, index) => {
                    return(
                        <span key={index}>- {number} </span>
                    )
                })}</p>
        </>
    )
}
```
- Works normally
- Has an increment and decrement depending on how many steps
- Detects maximum and minimum value, the functions are being put inside the adding and subtracting function
- Adds history, the function is also being put inside the adding and subtracting function
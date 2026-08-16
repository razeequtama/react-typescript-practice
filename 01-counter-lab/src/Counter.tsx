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
    }

    function subtract(step: number): void {
        const newCount = count - step;

        setCount(newCount);
        detectMin(newCount);
    }

    function detectMax(newCount: number)
    {
        if(newCount > maxValue) setMax(newCount)
    }

    function detectMin(newCount: number)
    {
        if(newCount < minValue) setMin(newCount)
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
        </>
    )
}
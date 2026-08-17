import { useState } from "react";

export default function Counter()
{
    let [count, setCount] = useState(0);
    let [step, setStep] = useState(1);
    let [maxValue, setMax] = useState(count);
    let [minValue, setMin] = useState(count);
    let [history, setHistory] = useState<number[]>([]);

    function changeCount(step: number): void {
        const newCount = count + step;

        setCount(newCount);
        if(maxValue < newCount) setMax(newCount);
        if(minValue > newCount) setMin(newCount);

        setHistory((remainingNumbers) => [...remainingNumbers, newCount]);
    }

    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => changeCount(step)}>+</button>
            <button onClick={() => changeCount(-step)}>-</button>

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
                        <span key={index}>-&gt; [{number}] </span>
                    )
                })}</p>
        </>
    )
}
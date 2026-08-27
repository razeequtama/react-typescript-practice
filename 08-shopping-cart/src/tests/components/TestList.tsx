import React, { useState } from 'react'
import { useTestContext } from '../contexts/TestContext';

export default function TestList() {

  const {numbers, setNumbers} = useTestContext();

  const button = `bg-blue-200 px-4 py-2 cursor-pointer hover:bg-blue-400 transition-all`;
  const entry = `px-4 py-2 flex gap-3`

  const [numbersEntry, setNumbersEntry] = useState([0, 0, 0]);
  const [isValue, setIsValue] = useState(false);


  function incrementEntry(i: number)
  {
    setNumbersEntry((prev) => {
      const newArray = [...prev]
      newArray[i]++
      return newArray
    })

    setIsValue(true);
  }

  function renderAmountInput(i: number)
  {
    return(
      <input
          type="number"
          value={numbersEntry[i]}
          onChange={(e) => {
            const value = Number(e.target.value);

            setNumbersEntry((prev) => {
              const newArray = [...prev];
              newArray[i] = value;
              if (newArray.every(num => num === 0)) {
                setIsValue(false);
              } else {
                setIsValue(true);
              }
              return newArray;
            });
          }}
      />

    )
  }
  
  function addToCart() {
    if (numbers.length === 0) {
      setNumbers(numbersEntry);
    } else {
      setNumbers((prev) =>
        prev.map((amount, i) => amount + numbersEntry[i])
      );
    }

    setNumbersEntry([0, 0, 0]);
    setIsValue(false);
  }



  return (
    <div>
      <h1 className='px-4 py-2 text-4xl font-bold'>TestList</h1>
      <div>
        <div className={entry}>
          <h2>0</h2>
          {numbersEntry[0] === 0 ? <button type="submit" onClick={() => incrementEntry(0)} className={button}>+</button> : renderAmountInput(0)}
        </div>
        <div className={entry}>
          <h2>1</h2>
          {numbersEntry[1] === 0 ? <button type="submit" onClick={() => incrementEntry(1)} className={button}>+</button> : renderAmountInput(1)} 
        </div>
        <div className={entry}>
          <h2>2</h2>      
          {numbersEntry[2] === 0 ? <button type="submit" onClick={() => incrementEntry(2)} className={button}>+</button> : renderAmountInput(2)}
        </div>

        {isValue ? <div className={entry}><button className={button} onClick={addToCart}>Submit</button></div> : null}
      </div>
    </div>
  )
}

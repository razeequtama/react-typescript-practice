import React from 'react'
import { useTestContext } from '../contexts/TestContext'

export default function TestCart() {

  const {numbers} = useTestContext();

  const entry = `flex gap-3`
  const container = `px-4 py-2 flex-col gap-3`

  return (
  <div>
    <h1 className="px-4 py-2 text-4xl font-bold">Test Cart</h1>

    <div className={container}>
      {numbers.map((amount, i) => (
        amount !== 0 && (
          <div className={entry} key={i}>
            <h2>{i}: {amount}</h2>
          </div>
        )
      ))}
    </div>
  </div>

  )
}

import React, { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react'

type TestContextType = {
  numbers: number[],
  setNumbers: Dispatch<SetStateAction<number[]>>
}

export const TestContext = createContext<TestContextType | null>(null);

export function useTestContext()
{
  const context = useContext(TestContext);
  if(!context) throw new Error("TestContext is null! Please use it inside of a provider!");
  return context;
} 

export default function TestContextProvider({children}: {children: ReactNode}) {

  const [numbers, setNumbers] = useState<number[]>([]);

  return (
    <TestContext.Provider value={{numbers, setNumbers}}>
      {children}
    </TestContext.Provider>
  )
}

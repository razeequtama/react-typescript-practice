import TestCart from "./tests/components/TestCart"
import TestList from "./tests/components/TestList"
import "./index.css"

export default function TestApp()
{
  return(
    <div>
      <TestList/>
      <TestCart/>
    </div>
  )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestApp from './TestApp'
import App from './App'
import TestContextProvider from './tests/contexts/TestContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <TestContextProvider>
    <TestApp />
    <App/>
  </TestContextProvider>
  </StrictMode>,
)

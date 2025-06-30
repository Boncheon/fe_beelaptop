import { useState } from 'react'
import Menu from './layout/Menu'
import './App.css'
import AppLayout from './layout/AppLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <AppLayout/>
    </>
  )
}

export default App

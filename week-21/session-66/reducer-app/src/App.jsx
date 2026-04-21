import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import BankAccount from './BankAccount'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>Basic Syntax: const [state, dispatch] = useReducer(reducer, initialState); </p>
       
      <Counter/>
      <BankAccount/>
      <Counter1/>
      <Counter2/>
    </div>
  )
}

export default App

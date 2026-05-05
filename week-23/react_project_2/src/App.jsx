import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Balance from './components/Balance'
import AddTransaction from './components/AddTransaction'
import TransactionList from './components/TransactionList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Expense Tracker Application</h1>
      <Balance/>
      <AddTransaction/>
      <TransactionList/>
    </div>
  )
}

export default App

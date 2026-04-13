import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);
  
  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      
      <button onClick={increment}>Increment </button> 

      <button onClick={decrement}>Decrement </button> 
    </div>
     
  )
}

export default App

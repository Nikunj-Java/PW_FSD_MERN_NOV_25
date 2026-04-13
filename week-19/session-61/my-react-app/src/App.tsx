import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);
  
  function handleClick(){
    setCount(count + 1);
  }
   

  return (
    <div>
      <h1>Vite + React Application</h1>
      <p>My First Vite + React App</p>
      <p>Here i am Changing DOM</p>
      <div>
        This is a simple React application built with Vite. It demonstrates how to set up a React project using Vite as the build tool. You can use this as a starting point for your own React projects and customize it according to your needs.
      </div>
      <button onClick={handleClick}>{count}</button> 

    </div>
  )
}

export default App

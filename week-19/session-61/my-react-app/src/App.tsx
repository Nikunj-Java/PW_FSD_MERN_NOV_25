import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);
  
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
      <div>
        <button onClick={()=> setIsVisible(prev =>!prev)}>
          {isVisible? "Hide":"Show"}
        </button>
        {isVisible && <p>This is some content to show/hide.</p>}
      </div>
      <div>
        <button onClick={()=> setLiked(prev =>!prev)}>
          {liked? "❤️Liked":"Like"}
        </button>

      </div>
    </div>
     
  )
}

export default App

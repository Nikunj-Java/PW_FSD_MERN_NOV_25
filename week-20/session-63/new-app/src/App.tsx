import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cart from './cart'

function App() {
  const [count, setCount] = useState(0)


  return (
     <div>
      <h1>Vite + React</h1>
      <p>App With useEffect & useState Hook</p>
      <Cart/>
     </div>
  )
}

export default App

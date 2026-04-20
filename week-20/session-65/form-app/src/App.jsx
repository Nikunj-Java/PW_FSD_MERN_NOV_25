import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './Form'
import Parent from './Parent'
// contextAPI
import { UserContext } from './UserContext'
import Child from './Child'

const App=()=> {
  const [user, setUser] = useState("Nikunj Soni")

  return (
    
    
      <UserContext.Provider value={{user,setUser}}>
        <Parent />
        <Child/>
      </UserContext.Provider>
  )
}

export default App

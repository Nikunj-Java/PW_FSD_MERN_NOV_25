import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar";
import Profile from "./Profile";
import Settings from "./Settings";
import Counter from './Counter';
function App() {

  const [user,setUser]= useState({name:"Nikunj Soni",email:"nikunj@pw.live"});

  return (
    <div>
      <NavBar user={user}/>
      <Profile user={user}/>
      <Settings user={user} setUser={setUser}/>
      <Counter/>

    </div>
  )
}

export default App

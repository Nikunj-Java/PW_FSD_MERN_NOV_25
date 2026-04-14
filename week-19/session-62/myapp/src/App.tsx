import { useEffect, useState } from 'react'
import './App.css'
import User from './User';
import Demo from './demo';
import Timer from './Timer';
import UserCard from './UserCard';
import Data from './Data';
import Demo1 from './Demo1';



function App() {
  const name="Nikunj Soni";
  
  
  return (
    <div>
      
        {/* <h1>Hello {name}!</h1> */}
        {/* This is called prop drilling */}
        {/* <User name="PW SKILLS"/>
        <User name="Nikunj Soni"/>
        <Demo/>
        <Timer/> */}
        {/* <Data/> */}
        <Demo1/>
        
        

        
        {/* <UserCard name='Nikunj Soni' age={25} />
        <UserCard name='Sushant' age={28} /> */}

       
    </div>
  )
  
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import BankAccount from './BankAccount'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import CustomHook from './CustomHook'
import UseRef from './UseRef'
import Task from './task'
import BuggyComponent from './session-67/BuggyComponent'
import ErrorBoundary from './session-67/Error'
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom'
import About from './session-67/Routing/About'
import Contact from './session-67/Routing/Contact'
import User from './session-67/Routing/User'
import Dashboard from './session-67/Routing/Dashboard'
import Profile from './session-67/Routing/Profile'
import Settings from './session-67/Routing/Settings'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>useReducer Hook</h1>
      <p>Basic Syntax: const [state, dispatch] = useReducer(reducer, initialState); </p>

      {/* <Counter/>
      <BankAccount/>
      <Counter1/>
      <Counter2/>
      <CustomHook/> */}
      {/* <UseRef/>
      <Task/> */}
      {/* with Wrror Boundary */}
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      {/*npm install react-router-dom */}
      <BrowserRouter>
      <h4>Install React- Router- Dom</h4>
      <p>npm install react-router-dom</p>
       
        
      
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
           {/* Parent Route */}
           <Route path="/about" element={<About />} >
            {/* Child Route */}
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
          </Route>
         
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User/>}/>
        </Routes>
        <Link to="/dashboard">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
      </BrowserRouter>
       


    </div>
  )
}

export default App

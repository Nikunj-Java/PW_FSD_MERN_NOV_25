import { useState } from 'react'
import Dashboard from './session-68/Dashboard'
import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Users from './session-68/Users'
import Home from './session-68/Home'
import About from './session-68/About'
// install react-router-dom: npm install react-router-dom
const router=createBrowserRouter([
  {path:"/",element: <Home/>},
  {path:"/dashboard",element: <Dashboard/>},
  {path:"/about",element: <About/>},
   {path:"/users",element: <Users/>},
  // Loader Example
  // {
  //   path: "/users",
  //   element: <Users/>,
  //   loader: usersLoader
  // }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App

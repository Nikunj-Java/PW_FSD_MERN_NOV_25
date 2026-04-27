import { useState } from 'react'
import Dashboard from './session-68/Dashboard'
import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Users from './session-68/Users'
import Home from './session-68/Home'
import About from './session-68/About'
import { userLoader } from './session-68/userLoader'
import AddUser from './session-68/AddUser'
import { addUserAction } from './session-68/addUserAction'
// install react-router-dom: npm install react-router-dom
const router=createBrowserRouter([
  {path:"/",element: <Home/>},
  {path:"/dashboard",element: <Dashboard/>},
  {path:"/about",element: <About/>},
  {path:"/adduser",
    element: <AddUser/>,
    action:addUserAction
  },
   {path:"/users",
    element: <Users/>,
    loader: userLoader
  },
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

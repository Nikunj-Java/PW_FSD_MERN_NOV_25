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
import Login from './session-68/Login'
import { dashboardLoader } from './session-68/dashboardLoader'
import { protectedLoader } from './session-68/ProtectedLoader'
import Counter from './session-69/Counter'
import NavBar from './session-69/Navigation/NavBar'
import MyDashboard from './session-69/Navigation/MyDashboard'
import MyProfile from './session-69/Navigation/MyProfile'
import UserData from './session-69/Navigation/UserData'
import withLoading from './session-70/withLoading'
import WelcomeUser from './session-70/WelcomeUser'
// install react-router-dom: npm install react-router-dom
const router=createBrowserRouter([
  {path:"/",
    element: <Home/>,
    loader:protectedLoader
  },
  {path:"/dashboard"
    ,element: <Dashboard/>,
  loader:dashboardLoader},
  {path:"/about/:id",
    element: <About/>
  },
  {path:"/login",element: <Login/>},
  {path:"/adduser",
    element: <AddUser/>,
    action:addUserAction
  },
   {path:"/users/",
    element: <Users/>,
    loader: userLoader,
    
  },
])

//hoc component
const WelcomeUserWithLoading= withLoading(WelcomeUser);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
      <NavBar/>
      <MyDashboard/>
      <MyProfile/>
      <UserData/>
      <RouterProvider router={router}/>

      <h1> HOC Example</h1>
      <WelcomeUserWithLoading isLoading={false} name="Nikunj Soni"/>
      

    </div>
  )
}

export default App

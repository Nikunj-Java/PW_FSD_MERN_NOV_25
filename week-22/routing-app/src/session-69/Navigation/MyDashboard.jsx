import { useDispatch } from "react-redux";
import {login,logout} from "../features/userSlice"

function MyDashboard(){
    const dispatch= useDispatch();
    const handleLogin=()=>{
        const userData={
            name:"Nikunj Soni",
            email:"nikunj@pw.live"
        }
        dispatch(login(userData));
    }
    const handleLogout=()=>{
        dispatch(logout());
    }
    return(
        <div>
            <h2>Dashboard</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default MyDashboard;
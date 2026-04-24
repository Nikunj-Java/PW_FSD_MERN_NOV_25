import { Link, Outlet } from "react-router-dom";

const Dashboard=()=>{
    return 
    (
        <div>
            <h1>Welcome to Dashboard Page</h1>
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
            </nav>
            
            <Outlet/>

        </div>
    )

}
export default Dashboard;
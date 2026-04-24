import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return (
        <div>
            <div>
             <h1>Welcome to AboutUs Page</h1>
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
            </nav>
            
            <Outlet/>

        </div>
        </div>
    )
   
}
export default About;

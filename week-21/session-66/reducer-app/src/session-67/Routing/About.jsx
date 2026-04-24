import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return (
        <div>
            <div>
             <h1>Welcome to AboutUs Page</h1>
             
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
           
            <Outlet/>

        </div>
        </div>
    )
   
}
export default About;

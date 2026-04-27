import { Link, useParams } from "react-router-dom";

const About=()=>{
    const {id}=useParams();


    return (
    <div>
        <h1>AboutPage with id:{id}</h1>
        <nav>
            <Link to="/"> Home</Link>
            <Link to="/users"> Users</Link>
            
            <Link to="/about/1"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/adduser"> Add User</Link>
            <Link to="/login"> Login</Link>
        </nav>
    </div>
    )

}
export default About;
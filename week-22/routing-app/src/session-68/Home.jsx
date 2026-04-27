import { Link } from "react-router-dom";

const Home=()=>{
    return (
    <div>
        <h1>Home Page</h1>
        <nav>
            <Link to="/users"> Users</Link>
            <Link to="/about"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/adduser"> Add User</Link>
            <Link to="/login"> Login</Link>
        </nav>
    </div>
    )
}
export default Home;
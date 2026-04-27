import { Link } from "react-router-dom";

const Dashboards=()=>{
    return  (
    <div>
        <h1>Dashboard Page</h1>
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
export default Dashboards;
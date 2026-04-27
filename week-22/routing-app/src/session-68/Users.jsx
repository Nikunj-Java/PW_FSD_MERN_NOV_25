import { Link } from "react-router-dom";

const Users=()=>{
    return (
    <div>
        <h1>Users Page</h1>
        <nav>
            <Link to="/users"> Users</Link>
            <Link to="/about"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
        </nav>
    </div>
    )
}
export default Users;
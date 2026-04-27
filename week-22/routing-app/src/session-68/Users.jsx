import { Link, useLoaderData } from "react-router-dom";
 

const Users=()=>{
    
    const users= useLoaderData();
    console.log(users)
    if(!users) return <p>Loading...</p>;
    return (
    <div>
        <h1>Users Page</h1>

        <nav>
            <Link to="/users"> Users</Link>
            <Link to="/about"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/adduser"> Add User</Link>
            <Link to="/login"> Login</Link>
        </nav>
        <div>
        
        {users.map(u=>(
            <p key={u.id}>{u.name}</p>
        ))}
        </div>
        
        
    </div>
    )
}
export default Users;
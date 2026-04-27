import { Form, Link, useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();

    const handleLogin=()=>{
        
        navigate("/dashboard");
    }

    return (
    <div>
        <h1>AboutPage</h1>
        <nav>
            <Link to="/"> Home</Link>
            <Link to="/users"> Users</Link>
            <Link to="/about/1"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/adduser"> Add User</Link>
            <Link to="/login"> Login</Link>
        </nav>
         <button onClick={handleLogin}>Login</button>
        
    </div>
    )

}
export default Login;
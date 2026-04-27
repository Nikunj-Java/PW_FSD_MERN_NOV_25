import { Form, Link } from "react-router-dom";

const AddUser=()=>{
    const formValid=true;
    const handleSubmit=()=>{
        if(formValid){
            navigate("/success")
        }else{
            navigate("/error")
        }
    }

    return (
    <div>
        <h1>AboutPage</h1>
        <nav>
            <Link to="/users"> Users</Link>
           <Link to="/about/1"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/adduser"> Add User</Link>
            <Link to="/login"> Login</Link>
        </nav>
        <Form method="post">
            <input type="text" name="name" placeholder="Enter Your Name"/>
            <button type="submit">Add User</button>
        </Form>
    </div>
    )

}
export default AddUser;
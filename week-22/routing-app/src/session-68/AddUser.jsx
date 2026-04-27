import { Form, Link } from "react-router-dom";

const AddUser=()=>{

    return (
    <div>
        <h1>AboutPage</h1>
        <nav>
            <Link to="/users"> Users</Link>
            <Link to="/about"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/adduser"> Add User</Link>
        </nav>
        <Form method="post">
            <input type="text" name="name" placeholder="Enter Your Name"/>
            <button type="submit">Add User</button>
        </Form>
    </div>
    )

}
export default AddUser;
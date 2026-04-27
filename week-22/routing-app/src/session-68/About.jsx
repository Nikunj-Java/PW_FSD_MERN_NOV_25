import { Link } from "react-router-dom";

const About=()=>{

    return (
    <div>
        <h1>AboutPage</h1>
        <nav>
            <Link to="/users"> Users</Link>
            <Link to="/about"> About</Link>
            <Link to="/dashboard"> Dashboard</Link>
        </nav>
    </div>
    )

}
export default About;
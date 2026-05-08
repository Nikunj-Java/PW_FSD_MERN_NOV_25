import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    )
}

export default NavBar
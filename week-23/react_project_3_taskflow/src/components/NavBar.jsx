import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function NavBar(){
    const {dark,toggleTheme}=useContext(ThemeContext)
    return (
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
             <button onClick={toggleTheme}>
        {dark ? "☀ Light" : "🌙 Dark"}
      </button>
        </nav>
        
    )
}

export default NavBar
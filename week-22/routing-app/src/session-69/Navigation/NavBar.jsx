import { useSelector } from "react-redux";

function NavBar(){
    const user= useSelector((state)=> state.user.user);
    return(
        <div style={{background:"lightgray",padding:"10px"}}>
            <h3>My APP</h3>
            {user ?(<p>Welcome ,{user.name}</p>
            ):(
            <p>Not Logged In</p>
            )}
        </div>
    )
}

export default NavBar;
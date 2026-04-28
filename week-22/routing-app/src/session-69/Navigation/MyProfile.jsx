import { useSelector } from "react-redux";

function MyProfile(){
    const user= useSelector((state)=> state.user.user);
    return(
        <div style={{background:"lightgray",padding:"10px"}}>
            <h3>About US</h3>
            {user ?(<p>Welcome ,{user.name}</p>
            ):(
            <p>Not Logged In</p>
            )}
        </div>
    )
}

export default MyProfile;
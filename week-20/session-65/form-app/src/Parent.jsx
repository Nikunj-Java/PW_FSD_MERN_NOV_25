import { useContext } from "react"
import { UserContext } from "./UserContext"


const Parent=()=>{
    const {user,setUser}= useContext(UserContext)

    return(
        <div>
            <h1>Hello Parent</h1>

            <p>Data Coming: {user}</p>

            <button onClick={()=>setUser("Jhon Doe")}>Update Name</button>
             
        </div>
    )

    
}

export default Parent
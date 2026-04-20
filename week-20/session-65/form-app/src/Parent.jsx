import { useContext } from "react"
import { UserContext } from "./UserContext"


const Parent=()=>{
    const user= useContext(UserContext)

    return(
        <div>
            <h1>Hello Parent</h1>
            <p>Data Coming: {user}</p>
             
        </div>
    )

    
}

export default Parent
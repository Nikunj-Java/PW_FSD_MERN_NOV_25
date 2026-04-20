import { useContext } from "react"
import { UserContext } from "./UserContext"

const Child=()=>{
    const user=useContext(UserContext);
    return <h3>Welcome Child! {user}</h3>
}
export default Child;
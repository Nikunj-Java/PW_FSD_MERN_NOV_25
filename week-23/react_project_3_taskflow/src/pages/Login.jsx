import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../redux/authSlice";

function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogin=()=>{
        dispatch(login({name:"Nikunj Soni"}));
        navigate("/");
    };
    return(
        <div className="page">
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;
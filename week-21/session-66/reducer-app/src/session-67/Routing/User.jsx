import { useParams } from "react-router-dom";

//Dynamic Routes
// route: http://localhost:5173/user/101
// route: http://localhost:5173/user/102

const User=()=>{

    const {id} =useParams();
    return <h2>User ID: {id}</h2>
}
export default User;
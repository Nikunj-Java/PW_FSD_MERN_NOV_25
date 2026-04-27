import { redirect } from "react-router-dom";

export const dashboardLoader = ()=>{
    const isLoggedIn= false;
    if(!isLoggedIn){
        return redirect("/login")
    }
    return null;
}

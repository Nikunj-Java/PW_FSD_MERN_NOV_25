import { redirect } from "react-router-dom";

export const protectedLoader=()=>{
    const isAuthenticated =false;

    if(!isAuthenticated){
        return redirect("/login");

    }
    return null;
}
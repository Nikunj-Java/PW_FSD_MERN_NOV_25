import { redirect } from "next/navigation";

export default function Dashboard(){
    const loggedIn= false;// make false and check the output
    
    if(!loggedIn){
        redirect("/login");
    }
    return <h1>Dashboard</h1>
}
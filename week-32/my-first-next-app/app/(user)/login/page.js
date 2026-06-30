"use client"
//as it need interaction we will use as a client

import { useRouter } from "next/navigation";

export default function Login(){
    const router=useRouter();

    function handleLogin(){
        alert("Login Successful");
        router.push("/about")
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
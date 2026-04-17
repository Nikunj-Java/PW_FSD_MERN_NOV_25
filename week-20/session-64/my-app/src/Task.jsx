import { useState } from "react";

const Task= ()=>{
    const [name,setName]= useState("Nikunj Soni");
    const [email,setEmail]= useState("nikunj@pw.live");

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
    };

    return(
        <div>

        <h2>Event Handling with Forms</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
            <button type="submit">Submit</button>
            
        </form>
        <h2>Event Handling with Multiple Events</h2>
        <button 
            onClick={()=> console.log("Clicked!")}
            onMouseEnter={()=> console.log("Mouse Entered")}
            onMouseLeave={()=> console.log("Mouse Left")}
            >Hover & Click</button>
        </div>
    )


}
export default Task;
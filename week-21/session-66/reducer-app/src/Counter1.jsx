import { useState } from "react"

const Child=({onclick})=>{
    alert("Child Rendered!")
    return <button onClick={onclick}>Click</button>
}

const Counter1=()=>{
    const [count,setCount]=useState(0);

    const handleClick=()=>{
        alert("Clicked!")
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <button onClick={()=>setCount(count-1)}>Decrease</button>
            <Child onClick={handleClick}/>
        </div>
    )



}

export default Counter1;
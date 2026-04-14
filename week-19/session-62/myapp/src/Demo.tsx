import { useEffect, useState } from "react";

function Demo(){

    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Count chnaged",count);
    },[count]);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>
                count: {count}
            </button>
        </div>
    )
}

export default Demo;
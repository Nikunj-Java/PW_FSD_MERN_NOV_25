import { useRef } from "react";

const UseRef=()=>{

    const inputRef= useRef(); // creates ref

    const focusInput=()=>{
        inputRef.current.focus(); // gives DOM Access
        alert("Input Focused!")
    }

    return(
        <div>
            <input ref={inputRef}/>  
            <button onClick={focusInput}>Focus</button>
        </div>
    )


}

export default UseRef;
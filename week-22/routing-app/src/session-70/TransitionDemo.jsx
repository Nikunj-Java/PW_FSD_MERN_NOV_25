import React,{ useState, useTransition } from "react";


function TransitionDemo() {
    const [input,setInput]=useState("");
    const [list,setList]=useState([]);
    const [isPending,startTransition]=useTransition();

    const handleChange=(e)=>{
        setInput(e.target.value);
        startTransition(()=>{
            const newList= Array(3000)
            .fill(e.target.value)
            .map((item,i)=>item+i);
            setList(newList);
        });
    }
  return (
    <div>
      <h1>Transition Demo</h1>
      <input onChange={handleChange}/>
      {isPending && <div>Updating List...</div>}
      {list.map((item,i)=>(
        <p key={i}>{item}</p>
      ))}
    </div>
  )
}
export default TransitionDemo;
import { useReducer } from "react";

const reducer=(state,action)=>{
    if(action.type==="INCREMENT"){
        return  {count:state.count+1};
    }
    if(action.type==="DECREMENT"){
        return  {count:state.count-1};
    }
    return state;
}
const Counter=()=>{
    const [state,dispatch]= useReducer(reducer,{count:0});

    return(
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        </div>
    )

}

export default Counter
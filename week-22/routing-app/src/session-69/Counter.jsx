import {useSelector,useDispatch} from "react-redux";
import { increment,decrement } from "./features/counterSlice";
const Counter=()=>{

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}> + Add </button>
            <button onClick={()=>dispatch(decrement())}> - Sub </button>
        </div>
    )
}

export default Counter;
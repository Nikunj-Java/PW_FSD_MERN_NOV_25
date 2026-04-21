import { useReducer } from "react";

const reducer=(state, action)=>{
    switch(action.type){
        case "DEPOSIT":
            return {balance: state.balance + action.amount}
        case "WITHDRAW":
            return {balance: state.balance - action.amount}
        default:
            return state;
    }

}
const BankAccount=()=>{

    const [state,dispatch]=useReducer(reducer,{balance: 1000});

    return(
        <div>
            <h2>Balance: ₹{state.balance}</h2>
            <button onClick={()=>dispatch({type:"DEPOSIT",amount:500})}>
                Deposite ₹500
            </button>
             <button onClick={()=>dispatch({type:"WITHDRAW",amount:200})}>
                Deposite ₹200
            </button>
        </div>
    )

    

}

export default BankAccount;
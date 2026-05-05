import { createContext, useEffect, useReducer } from "react";

export const ExpenseContext= createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,action.payload]
        case "DELETE":
            return [...state,action.payload]
        default:
            return state;
    }
}

const ExpesneProvider=({children})=>{
    const [state,dispatch]=useReducer(
        reducer.JSON.parse(localStorage.getItem("transactions")) || []
    );
    useEffect(()=>{
        localStorage.setItem("transactions",JSON.stringify(state));
    },[state])
    return(
        <ExpenseContext.Provider value={{state,dispatch}}>
            {children}
        </ExpenseContext.Provider>
    )
}
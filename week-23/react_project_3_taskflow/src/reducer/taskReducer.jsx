export const initialTasks=[];
export const taskReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return [...state,action.payload];
        case "DELETE_TASK":
            return state.filter((t)=>t.id !==action.payload);
        case "EDIT_TASK":
            return state.map(
                (t)=>
            t.id === action.payload.id 
                        ?
            {...t,text:action.payload.text}:t
        );
        default:
            return state;
    }
};
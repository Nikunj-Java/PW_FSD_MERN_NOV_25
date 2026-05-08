export const initialTasks=[];
export const taskReducer=(state,action)=>{
    switch(action.type){
        case "ADD_TASK":
            return [...state,action.payload];
        case "DELETE_TASK":
            return state.filter((t)=>t.id !==action.payload);
        default:
            return state;
    }
};
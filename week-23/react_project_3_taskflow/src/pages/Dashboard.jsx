import { useEffect, useReducer } from "react";
import { initialTasks, taskReducer } from "../reducer/taskReducer";

function Dashboard(){
    const [task,dispatch]=useReducer(taskReducer,initialTasks);
    useEffect(()=>{
        console.log("Dashboard Loaded")
    },[])
    return(
        <div className="page">
            <h1> Dashboard </h1>
            
        </div>
    )
}
export default Dashboard;
import { useEffect, useReducer } from "react";
import { initialTasks, taskReducer } from "../reducer/taskReducer";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard(){
    const [tasks,dispatch]=useReducer(taskReducer,initialTasks);
    useEffect(()=>{
        console.log("Dashboard Loaded")
    },[])
    return(
        <div className="page">
            <h1> Dashboard </h1>
            <TaskForm dispatch={dispatch}/>
            <TaskList tasks={tasks} dispatch={dispatch}/>
            
        </div>
    )
}
export default Dashboard;
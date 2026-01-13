function Task(taskName){
    this.taskName=taskName;
    this.completed=false;
}

Task.prototype.toggleComplete=function(){
    this.completed=!this.completed;
}

//task list array
let tasks= []

function addTask(){
    let input=document.getElementById("taskInput").value;

    if(input === ""){
        alert("please Enter a Task");
        return;
    }

    let task= new Task(input);
    tasks.push(task);
    console.log(tasks);
    document.getElementById("taskInput").value="";

    displaytasks();
}

//display task

function displaytasks(){
    let list= document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        let li= document.createElement("li");
        li.className=task.completed ? "Completed":"";
        li.innerHTML=
        ` ${task.taskName}
        <button onClick="completedTask(${index})"> ✔ </button>
        <button onClick="deleteTask(${index})"> X </button>
        `
        list.appendChild(li);
    })
}

function completedTask(index){
    tasks[index].toggleComplete();
    displaytasks();
}

function deleteTask(index){
    tasks.splice(index,1)
    displaytasks();
}
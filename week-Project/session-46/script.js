var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var searchInput = document.getElementById("searchInput");
var taskCount = document.getElementById("taskCount");

var currentFilter = "all";

addBtn.onclick = function(){

if(taskInput.value === ""){
alert("Enter a task");
return;
}

var task = {
text: taskInput.value,
completed: false
};

tasks.push(task);

saveTasks();
taskInput.value="";
renderTasks();

};

function renderTasks(){

taskList.innerHTML="";

var searchText = searchInput.value.toLowerCase();

var filteredTasks = tasks.filter(function(task){

var matchesFilter = true;

if(currentFilter === "completed"){
matchesFilter = task.completed;
}

if(currentFilter === "pending"){
matchesFilter = !task.completed;
}

var matchesSearch = task.text.toLowerCase().includes(searchText);

return matchesFilter && matchesSearch;

});

for(var i=0;i<filteredTasks.length;i++){

(function(index){

var task = filteredTasks[index];

var li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML =
"<span>"+task.text+"</span>" +
"<div class='actions'>" +
"<button onclick='toggleTask("+index+")'>✔</button>" +
"<button onclick='editTask("+index+")'>Edit</button>" +
"<button onclick='deleteTask("+index+")'>Delete</button>" +
"</div>";

taskList.appendChild(li);

})(i);

}

taskCount.innerText = tasks.length;

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

saveTasks();
renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
renderTasks();

}

function editTask(index){

var newText = prompt("Edit task",tasks[index].text);

if(newText){
tasks[index].text = newText;
saveTasks();
renderTasks();
}

}

function filterTasks(type){

currentFilter = type;

renderTasks();

}

searchInput.onkeyup = function(){
    renderTasks();
};

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

renderTasks();
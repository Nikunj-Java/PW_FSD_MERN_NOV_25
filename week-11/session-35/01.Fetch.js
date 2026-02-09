
function loadData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=> response.json())
    .then(data=> console.log(data))
    .catch(error=>console.error(error))
}
//loadData();

function loadOneData(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=> response.json())
    .then(data=> console.log(data))
    .catch(error=>console.error(error))
}
loadOneData();
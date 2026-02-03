//synchronus Programing Example
console.log("Start");
//this is a blocking code
function syncTask(){
    for(let i=0; i<=5; i++){
        console.log("Sync Task:", i);
    }
}
syncTask();
console.log("End")
//asynchronus Programing Example
//non blocking code
console.log("Start");
setTimeout(()=>{
    console.log("Async task Completed!")
},5000);
console.log("End");
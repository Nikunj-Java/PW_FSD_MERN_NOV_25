// a Promise represents a value that will be available in the future

const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Loaded Successfully!");
        //reject("Error: Data not loaded");
    },2000);
});

promise.
then(result=>{console.log(result);}) //success handle(can have multiple then)
.catch(error=>{console.log(error);}); //error hanlder
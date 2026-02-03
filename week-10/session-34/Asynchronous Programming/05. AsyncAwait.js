//this will makes async code look like sync code
async function loadData(){
    try {

        const response= await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data= await response.json();
        console.log(data);
        
    } catch (error) {
        console.log("Error:",error);
    }
}

loadData();
function InsertData(){
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title:"My Post",
            body:" This is My Post",
            userId: 1
        })
        
    })
    .then(res=> res.json())
    .then(data=>console.log(data))
    
    
}
InsertData();
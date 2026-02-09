fetch("https://jsonplaceholder.typicode.com/posts/2",{
    method:'PUT',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id:2,
        title:'Updated Title',
        body:'Updated Content',
        userId:2
    })
})
.then(res=>res.json())
.then(data=>console.log(data))
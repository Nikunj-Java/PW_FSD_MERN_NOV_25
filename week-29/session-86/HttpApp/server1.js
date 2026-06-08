import http from 'http';

const server=http.createServer((req,res)=>{
    let body='';

    req.on('data',chunk=>{
        body +=chunk
    });
    req.on('end',()=>{
        const data= JSON.parse(body);
        console.log(data);
        res.end('Data Received!')
    })
    
 
});

server.listen(3000,()=>{
    console.log("Server Running and Up! on http://localhost:3000")
});
import http from "http";
import fs from 'fs';

const server= http.createServer((req,res)=>{
    fs.readFile('./public/index.html',(err,data)=>{
        res.writeHead(200,{
            'content-type':'text/html'
        });
        res.end(data);
    })

});

server.listen(3000,()=> console.log("server Running and Up! on http://localhost:3000"));
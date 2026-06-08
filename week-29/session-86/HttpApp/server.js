import http from 'http';

const server=http.createServer((req,res)=>{
    // understand request object
    console.log(req.method);
    console.log(req.url)
    // Basic Routing
    // res.writeHead(200,{
    //     'Content-Type':'text/plain'
    // });
    if(req.url === "/" && req.method ==="GET"){
        res.end("Home Page")
    }else if(req.url === "/about" && req.method ==="GET"){
        res.end("About Page");
        console.log(req.method);
    }
    else if(req.url === "/dashboard" && req.method ==="GET"){
        res.end("Dashboard Page")
    }
    else{
        res.statusCode=404;
        res.end("Page Not Found")
    } 
    
    //res.end("Check the Console!")
});

server.listen(3000,()=>{
    console.log("Server Running and Up! on http://localhost:3000")
});
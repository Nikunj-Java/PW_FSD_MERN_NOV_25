import http from 'http';

let users=[
    {id:1,name:"Nikunj"},
    {id:2,name:"Danish"},
    {id:3,name:"Sushant"},
    {id:4,name:"Tanu"},
    {id:5,name:"Harsh"}
]
const server= http.createServer((req,res)=>{
    //get all users
    if(req.url==="/users" && req.method==='GET'){
        res.writeHead(200);
        return res.end(JSON.stringify(users));
    }
    // get user by id
    //url: /users/2  <--- 2 is id
    if(req.url.startsWith("/users/")&& req.method ==='GET'){
        const id=parseInt(req.url.split("/")[2]);
        const user= users.find(u=> u.id === id);

        if(!user){
            res.writeHead(404);
            return res.end(JSON.stringify({
                message:"User Not Found !"
            }))
        }
        res.writeHead(200);
        return res.end(JSON.stringify(user))
        // goto>postmen and check
        // http://localhost:3000/users/1
    }

});

server.listen(3000,()=>console.log("Server is Running and Up! on http://localhost:3000"));
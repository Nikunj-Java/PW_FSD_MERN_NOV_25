import fs from 'fs';

fs.readFile("student.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data in file: ",data);
})


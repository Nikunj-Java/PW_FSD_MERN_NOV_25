import fs from 'fs';

fs.mkdir("teachers",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Folder Created!")
})
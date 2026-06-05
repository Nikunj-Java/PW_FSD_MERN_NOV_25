import fs from 'fs';

fs.writeFile("student.txt","Hello Students!",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Created!")
});
 

 
import fs from 'fs';

fs.writeFileSync("student.txt","Hello Students!",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File Created!")
});
 

 
import fs from 'fs';

const data= fs.readFileSync("student.txt","utf-8")

console.log("Data in file: ",data);
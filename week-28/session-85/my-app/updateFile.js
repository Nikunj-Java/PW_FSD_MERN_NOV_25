import fs from 'fs';

fs.appendFileSync("student.txt","\nwelcome to PWSKILLS")

// reading latest updated data
const data= fs.readFileSync("student.txt","utf-8")
console.log("Data in file: ",data);
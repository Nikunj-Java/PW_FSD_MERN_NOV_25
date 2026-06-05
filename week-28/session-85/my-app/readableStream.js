import fs from "fs";
const readableStream=fs.createReadStream("large.txt","utf-8");

readableStream.on("data",(chunk)=>{console.log(chunk)});
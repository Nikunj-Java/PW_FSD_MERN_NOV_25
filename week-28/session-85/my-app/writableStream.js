import fs from "fs";

const writableStream=fs.createWriteStream("output.txt");

writableStream.write("Welcome to");
writableStream.write("Node.js");
writableStream.write("at Pw Skills");

writableStream.end();
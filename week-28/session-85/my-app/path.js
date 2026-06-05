import path from "path";

const filePath= path.join("students","data","students.txt");

console.log(filePath);
// get base name
console.log(path.basename("/home/user/app.js"));

// get an extension
console.log(path.extname("app.js"));
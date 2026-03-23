let str= "Hello World";
//01 index of
console.log(str);
console.log("Index of: ",str.indexOf("World"));
console.log("Index of: ",str.indexOf("ello"));
console.log("Index of: ",str.indexOf("o"));
console.log("Index of: ",str.indexOf("nikunj"));
//02 includes
console.log("Includes: ",str.includes("Hello")); // its a case sensetive ("Hello") & ("hello") will be different
console.log("hello".includes("ell"));
//03. startsWith() /endsWith()
console.log(str.startsWith("Hello"));
console.log(str.endsWith("World"));
//04. replace()
console.log(str.replace("World","Nikunj !"));
//05. replaceAll()
//let str1= "a-b-c-b";
console.log(str.replaceAll("o","-"));
//Extracting and Splitting
//06. slice()
console.log(str.slice(0,5));
console.log(str.slice(6,11));
//07 spilt()
console.log(str.split(" ")); // returns an array
str2="I LOVE JAVASCRIPT";
console.log(str2.split(" ")); // returns an array
//08 Comparison
console.log("abc"==="abc"); //true
console.log("abc"==="ABC"); //true
// case sensitive comparison
let a= "Hello";
let b= "hello";
console.log(a.toLowerCase()===b.toLowerCase());
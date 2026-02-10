// there are four methods in regex
//1. match
//2. replace()
//3. search()
//4. test

//01 match()-- find the matching text
let text= "My Number is 9876543210";
let result=text.match(/\d+/);// → one or more digits also check this--> //match(/\d{2}/), match(/\d{5}/)

console.log(result[0]);

//02 replace()-- Replace Matching Text
let newText=text.replace(/\d+/,"XXXXXXXXXX");
console.log(newText);

//03 search()-- Find Position of Match (it will give you an index starting from)
console.log(text.search(/\d+/));


//Revision of all
let msg="Call me at 9876543212";

console.log(msg.match(/\d+/)[0]);
console.log(msg.replace(/\d+/,"****"))
console.log(msg.search(/\d+/));
//[A] Implicit Type Conversion 
//01 Number to String
let result= 10+ "3";
console.log("Number to String: ", result); // "103"
console.log("Type of result: ", typeof result); // string

//02 String to Number
let str= "20" - 5;
console.log("String to Number: ", str);

//03 Boolean to Number
let flag= true;
console.log("Boolean to Number: ", flag + 2); // 3
console.log("Boolean to Number (false): ", false + 2); // 2

//04 Number to Boolean
let num= 0;
console.log("Number to Boolean (0): ", Boolean(num)); // false

//05 comparison coercion
console.log(5 == "5"); // true (string "5" is converted to number 5)
console.log(5 === "5"); // false (no type coercion, different types)

//[B] Explicit Type Conversion
//01 String to Number
let strNum= "100";
let convertedNum= Number(strNum);
console.log("Explicit String to Number: ", convertedNum); // 100
console.log(Number("abc")); // NaN
console.log(Number("123")); // 123
console.log(Number(true)); // 1
console.log(Number(false)); // 0
// using ParseInt and ParseFloat

console.log("Using ParseInt: ", parseInt(10)); // 10
console.log("Using ParseInt: ", parseInt(10.99)); // 10
console.log("Using ParseFloat: ", parseFloat(10.99)); // 10
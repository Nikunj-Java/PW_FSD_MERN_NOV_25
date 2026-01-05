//comparison Operators
// Comparison operators are used to compare two values.
// They return a boolean value (true or false) based on the comparison.
// operators: ==, ===, !=, !==, >, <, >=, <=
let p=5;
console.log("Is p equal to 5? :", p==5); // true
console.log("Is p equal to 5? :", p==4); // false
let a='welcome'
console.log("Is a equal to 'welcome'? (value)", a=='welcome'); // true
console.log("Is a equal to 'Welcome'? (value + type)", a=='Welcome'); // false (case-sensitive)

let q=10;
console.log("Is q not equal to 5? :(value)", q!=5); // true
console.log("Is q not equal to 5? :(value+ type)", q!==5); // true

//comparison

console.log("Is p greater than 5? :", p>5); // false
console.log("Is p less than 5? :", p<5); // false
console.log("Is p greater than or equal to 5? :", p>=5); // true
console.log("Is p less than or equal to 5? :", p<=5); // true

//summary:
// ==  : equal to (value)
// === : equal to (value + type)
// !=  : not equal to (value)
// !== : not equal to (value + type)
// >   : greater than
// <   : less than
// >=  : greater than or equal to
// <=  : less than or equal to

//write a program to validate user age for voting eligibility
let userAge=17;
let votingAge=18;   
if(userAge>=votingAge){
    console.log("User is eligible to vote.");
}else{
    console.log("User is not eligible to vote.");
}


//The every() method checks whether all elements in an 
// array satisfy a condition.
//example-1: check all elements are Positive
let num= [1,2,3,4,5];
let result= num.every(n=> n>0);
console.log(result);

//example-2: check all elements are Positive
let num1= [1,2,-3,4,5];
let result1= num1.every(n=> n>0);
console.log(result1);

let student=[
    {"name":"Nikunj Soni", marks:80},
    {"name":"Amit Saina",marks:60},
    {"name":"Rohit Kakad",marks:90},
];

let passed= student.every(s=>s.marks>=35);
console.log(passed); // true
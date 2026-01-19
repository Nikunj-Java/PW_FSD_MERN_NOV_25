let num = [1, 3, 5, 8, 10];
let result = num.find(n => n > 4);
console.log(result); // answer=5, as it is first matchung result....

let num1 = [1, 3, 5, 7];
let result1 = num1.find(n => n % 2 === 0);
console.log(result1); //undefined

//object
let students = [
    { name: "Nikunj Soni", marks: 60 },
    { name: "Suhas Shinde", marks: 85 },
    { name: "Danial Doe", marks: 92 }
];

let topper=students.find(s=> s.marks >75);
console.log(topper);//  { name: "Suhas Shinde", marks: 85 }

// difference between find and filter
// find(): First matching Element
// filter(): all matching elements(array)

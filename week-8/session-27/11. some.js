//The some() method checks whether at least one element in an 
// array satisfies a condition.
//example-1: check atleast any 1 condition is true then its it true
let num= [1,2,3,4,5,8,10];
let result= num.some(n=> n%2 === 0);
console.log(result);//true


//example-2: check atleast any 1 condition is true then its it true
let num1= [1,3,5,7,9,11];
let result1= num1.some(n=> n%2 === 0);
console.log(result1);//true

// apply in object as well
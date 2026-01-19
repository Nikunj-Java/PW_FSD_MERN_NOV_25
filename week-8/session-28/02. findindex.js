
let num = [1, 3, 5, 8, 10];
let result = num.find(n => n > 4);
console.log(result); // answer=5, as it is first matchung result....

let num1 = [1, 3, 5, 8, 10];
let result1 = num1.findIndex(n => n > 4);
console.log(result1); 

console.log("The Number is: "+result+" | its Index is :"+result1);

let num2 = [1, 3, 5, 7, 9];
let result2 = num2.findIndex(n => n%2 === 0);
console.log(result2); 

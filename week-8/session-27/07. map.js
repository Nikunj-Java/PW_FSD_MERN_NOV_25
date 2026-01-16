// map in javascript 
// map() method is used to create a new array by transforming 
// each element of an existing array
//note: it doesnot arrange original array
// returns new array
// Used when you want to modify each value
//syntax: array.map(function(element,index,array){ return newvalue})

//example-1
let num= [1,2,3,4,5];

let result= num.map(function(n){ 
    return n * 2;
    });
console.log(result);

//example -2 using arraow function
let square= num.map(n=> n*n);
console.log(square);
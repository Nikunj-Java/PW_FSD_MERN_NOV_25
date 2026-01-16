// filter() in javascript is used to create a new array containing only 
// element that pass a condition
// it allows only the True Condition

// syntax: array.filter(function(element,ibdex,array){
//    return condition; //ture--> keep, false--> remove
//  }); 
 
//Ex:01 filter even numbers
let num= [1,2,3,4,5,6,7,8,9,10];
let evens= num.filter(n=> n%2 === 0);
console.log(evens);

//Ex:02 filter string by length
let fruits=["Apple","Banana","Kiwi","Mango"];
let longFruit= fruits.filter(fruit=>fruit.length>5);
console.log(longFruit);
//Ex: 03 Filter Object 
let student=[
    {"name":"Nikunj Soni", marks:80},
    {"name":"Amit Saina",marks:60},
    {"name":"Rohit Kakad",marks:90},
];
//filter the names of students who scored above 75 marks
let toppers = student.filter(s => s.marks >= 75);
console.log(toppers);
let x; //declaration
x=5; // assigning the value
var y=10; // declaring and assigning the value
console.log("x+y=", x+y);

//javascript is not a strictly typed language
var num=45; // num is a number
var name="Nikunj Soni"; // name is a string
var condition= true; // condition is a boolean
var object=null; // object is null
console.log("Type of num is: ",typeof num); // number
console.log("Type of name is:", typeof name); // string
console.log("Type of condition is:", typeof condition); // boolean
console.log("Type of object is:", typeof object); // object
// Array
var array=["a","b","c","d"];
console.log("Type of array is:", typeof array); // object

var json={
    "name":"Nikunj Soni",
    "age":21,
    "isStudent":true
};
console.log("Type of json is:", typeof json); // object
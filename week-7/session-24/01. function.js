
/*
syntax:
function functionName(parameter){
    //code
}
*/

function greeting(){
    console.log("Welcome to Javascript");
}
greeting();

//ex: function Declration
function greet(name){
    console.log("Hello "+name+"!");
}

greet("Nikunj Soni"); //passing a single parameter with function

//ex: passing a number(s) -> two variables

function add(a,b){
    console.log(a+b);
}

add(10,20);

//ex : single parameter with return value
let square= function (num){
    return num*num;
}
console.log(square(5));//25

//ex: multiple parameter with return value
let multiply= function(num1,num2){
    return num1*num2;
}
console.log(multiply(2,3))//6;

//arrow function : defined using =>
    const double = x => x*2;
    console.log(double(6));

//multiple functions
    const sum= (a,b,c)=>{
        return a+b+c;
    }
    console.log(sum(10,20,30));

//anonymous Function
setTimeout(function (){
    console.log("Hello after 5 seconds");
},5000); //5000 milliseconds= 5 seconds



//conclusion: JavaScript is fundamentally synchronous and Single Threaded in its core execution, 
// but the browser and node.js environments provide mechanis, to hanle asynchronous tasks. 

//IIFE: Immediately Invoked Function Expression(IIFE)

// syntax:(): ()(); //mostly used to secure the data 
//normal Function
function name(){
    console.log("Hello");
}
name();
//iife
(function(){console.log("Hello from IIFE")}) ();

(function (){ console.log("IIFE Executed!")})();
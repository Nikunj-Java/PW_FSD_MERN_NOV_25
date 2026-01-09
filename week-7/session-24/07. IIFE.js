









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
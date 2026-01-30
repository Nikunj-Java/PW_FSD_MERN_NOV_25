// a lexical environment is the local memory along with the lexical scope that is created when a function is created
// it consists of the local variables within that function as well as the variables from its parent scopes that are accessible due to lexical scoping

function outer(){
    let x=10;

    function inner(){
        let y=20;
        console.log("Inner Function:",x,y); // can access x from outer scope
    }
    inner();
}
outer();

// outer() creates lexical environment with x=10
// inner() is writtern inside outer(), so it forms a closure and can access x from outer()s lexical environment
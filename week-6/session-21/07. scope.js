// global scope
let y=20;

function testScope(){
    // local scope | function scope
    let y=10;
    console.log("Value of y in local scope:", y);
}
testScope();

if(y>10){
    // block scope
    let y=30;
    console.log("Value of y in block scope:", y);
}

console.log("Value of y in global scope:", y);
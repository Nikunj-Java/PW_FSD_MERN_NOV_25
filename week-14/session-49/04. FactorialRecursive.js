// n!= n(n-1)!
// (n-1)!= (n-1)(n-2)!
// (n-2)!= (n-2)(n-3)!

function factorialRecursive(n){
    if( n === 1 || n === 0)
        return 1;  // 1!=1. 0!=1
    let result= n * factorialRecursive(n-1);
    console.log("Result: "+n+"! = "+result)
    return result; // or return n * factorialRecursive(n-1);
}

console.log(factorialRecursive(10));
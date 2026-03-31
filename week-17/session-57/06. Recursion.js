function printFactorial(n){
    if(n === 0) return 1; // base case
    //console.log(n); // for understanding the flow
    return n * printFactorial(n-1); // recursive case
}
console.log(printFactorial(5)); // 120
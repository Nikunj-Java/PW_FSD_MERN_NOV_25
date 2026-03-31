// Print 5 numbers
function printNumbers(n){
    if(n === 0) return;
    printNumbers(n-1); // recursion
    console.log(n); // backtracking
}
printNumbers(0); // 1 2 3 4 5
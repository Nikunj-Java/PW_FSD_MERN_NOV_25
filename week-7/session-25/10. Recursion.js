// Factorials: 5!= 5 X 4 X 3 X 2 X 1
// 10!= 10 X 9 X 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1

function factorial(n){
    if(n === 1) return 1; //base case
    return n * factorial(n-1);
}

console.log(factorial(5));  //5!= 5 X 4 X 3 X 2 X 1= 120
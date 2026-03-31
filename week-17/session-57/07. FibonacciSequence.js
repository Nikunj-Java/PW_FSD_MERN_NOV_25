// Formula for Fibonacci sequence: F(n) = F(n-1) + F(n-2)
// Base cases: F(0) = 0, F(1) = 1   

function finonacci(n){
    if(n <=1) return n; // base case

    return finonacci(n-1) + finonacci(n-2); // recursive case
}

console.log(finonacci(5)); // 5
// explanation
// F(5) = F(4) + F(3)
// F(4) = F(3) + F(2)
// F(3) = F(2) + F(1)
// F(2) = F(1) + F(0)
// F(1) = 1
// F(0) = 0

console.log(finonacci(30)); 

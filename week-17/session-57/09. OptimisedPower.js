function power(x,n){
    if( n === 0) return 1; // base case
    let half= power(x, Math.floor(n/2)); // recursive case
    if( n % 2 === 0)
        return half * half;
    
    else
        return half * half * x;
}

console.log(power(25,3)); // 15625
// Time Complexity= O(log n) (Fast for large n)
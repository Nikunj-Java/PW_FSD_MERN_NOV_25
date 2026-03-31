function power(x,n){
    let result=1;
    for(let i=0; i<n; i++){
        result *= x;
    }
    return result;

}

//console.log(power(25,3));
// Time Complexity= O(n) (Slow for large n)
// simple solution (recursive)

function powerofNumber(x,n){
    //base case
    if(n === 0) return 1;
    return x * powerofNumber(x, n-1);
}
console.log(powerofNumber(25,3)); // 15625
// Time Complexity= O(n) (Slow for large n)
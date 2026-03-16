// Greatest Common Divisior
function gcd(a,b){
    while (b!==0){
        let temp= b;
        b= a % b;
        a= temp
    }
    return a;
}
console.log(gcd(36,60));
console.log(gcd(48,18));
//time complexicity: O(logn)-> very efficient
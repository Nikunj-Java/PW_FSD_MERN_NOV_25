function getDivisors(n){
    let divisors=[];
    for ( let i=1; i<= Math.sqrt(n); i++){
        if(n % i === 0){
            divisors.push(i);
            if( i !== n/i){
                divisors.push(n/i);
            }
        }
    }
    return divisors.sort((a,b)=> a-b);
}
console.log(getDivisors(36));
// [1,2,3,4,6,9,12,18,36]
// Time Complexity: O(Squareroot(n))
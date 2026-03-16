// this is faster than all
// 2^10= 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 
// 2^(5 x 2)= ( 2 ^ 5) ^2
// this will reduces half each time

function fastPower(base,exp){
    if(exp === 0) return 1;
    let half= fastPower(base,Math.floor(exp/2));

    if(exp % 2 === 0){
        return half * half;
    }else{
        return base * half * half
    }
}
console.log(fastPower(25,10));
// complexity: O(log n)-> Best Approach
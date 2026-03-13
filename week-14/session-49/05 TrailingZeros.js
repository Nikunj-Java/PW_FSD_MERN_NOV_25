// What is trailing Zero
/*
Trailing Zeros means no of zeros in a factorial digit calculation
5!= 120  ===> 1 zero
10!=3828800=> 2 zero
*/
//algorithm of 100!
// 1. Divide by 5: 100/5  = 20
// 2. Divide by 25: 100/25 = 4
// 3. Divide by 125 but 125>100 so we will stop here
// 4. add them up: 20 +4 = 24 (trailing zeros)

function TrailingZeros(n){
    let count=0;
    for( let i=5; i<=n; i=i*5){
        count +=Math.floor(n/i)
    }
    return count;
}
console.log(TrailingZeros(100));

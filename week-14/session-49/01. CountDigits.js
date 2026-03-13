/*
1. Start
2. Input Number N
3. count = 0
4. While N > 0
    N = N/10
    count ++;
5. Print count
6. End
*/
// Method:1 Iterative Approach
function CountDigits(n){
    let count =0;
    while (n > 0){
        n= Math.floor(n/10);
        count ++;
    }
    return count;
}

console.log("Digits in Number 548321: ",CountDigits(548321));



// Method:2 Mathematical Approach
// Time Complexicity: o(1)
function countDigitsTwo(n){
    return Math.floor(Math.log10(n))+1;
    // log10(548321) ~=5.739
    // floor(5.739) = 5
    // digits 5 + 1 = 6
}

console.log("Digits in Number 548321: ",countDigitsTwo(548321));

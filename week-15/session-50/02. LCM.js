// formula: LCM= a x b /(GCD)
function gcd(a,b){
    while (b!==0){
        let temp= b;
        b= a % b;
        a= temp
    }
    return a;
}
function lcm(a,b){
    return (a * b)/gcd(a,b);
}
console.log("LCM of 4 and 6 :",lcm(4,6));
console.log("LCM of 24 and 36 :",lcm(24,36));
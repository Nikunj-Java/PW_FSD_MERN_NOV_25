function powerRecursive(base,exp){
    if(exp === 0) return 1;  // n^0 =1
    return base * powerRecursive(base,exp-1);
}
console.log(powerRecursive(25,2));// 625
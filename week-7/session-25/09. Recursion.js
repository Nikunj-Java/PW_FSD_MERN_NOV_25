function printNumbers(n){
    if(n > 5) return ; //base case
    console.log(n);
    printNumbers(n+1); //recursive call
}

printNumbers(1);
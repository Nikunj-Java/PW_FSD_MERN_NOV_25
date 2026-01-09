function add(a,b=2){ //b=2 default value
    return a+b;
}

console.log("Passing Two Parameters:",add(2,7));
console.log("Passing one Parameter:",add(4));

//note: if you will pass the value of b, it will be overridden by the default 
//value and you will get 2+7=9
// but if you will not pass the value of b then default value will be
//considered and you will get 4+2=6
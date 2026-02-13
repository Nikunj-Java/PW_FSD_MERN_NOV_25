// method overloading in javascript
// method overloading is not supported in javascript
// same method name but different parameters
// in javascript we can achieve method overloading using default parameters or rest parameters

class Calculator{
    add(a, b){
               
        return a + b + c;
    }
    add(a, b, c){
        return a + b + c;
    }
     add(a, b, c, d){
        return a + b + c + d;
    }
}


//correct way
// class Calculator{
//     add(a, b, c=0){
//         return a + b + c;
//     }   
// }
let calc= new Calculator();
console.log(calc.add(2,3)); // NaN- Not a Number
console.log(calc.add(2,3,4)); // 9
console.log(calc.add(2,3,4,5)); // 14

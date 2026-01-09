//syntax: function name(...num){ }

function sum(...num){
    var total=0;
    for(let i of num){
        total=total+i
    }
    return total;
}
console.log("Sum of 1,2,3: ",sum(1,2,3));// 1+2+3=6

console.log("Sum of 1,2,3,4,5: ",sum(1,2,3,4,5)); //1+2+3+4+5=15

console.log("Sum of 1,2,3,........,9,10: ",sum(1,2,3,4,5,6,7,8,9,10)); //1+2+3+4+5+6+7+8+9+10=55
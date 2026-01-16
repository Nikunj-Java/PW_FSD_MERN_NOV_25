// The reduce() method is used to combine all array elements 
// into a single value
/*
syntax: 
Array.reduce(function(accumulator,currrentValue,index,array){
    return updatedAccumulator
})
*/
//example-1
let num= [1,2,3,4,5];//1+2+3+4+5=15
let sum= num.reduce((res,n)=> res+n,0);
console.log(sum);

let product= num.reduce((res,n)=> res*n,1);
console.log(product);

//ex:02 Total Price 
let cart= [
    {item: "Book",price: 200},
    {item: "Pen",price: 50},
    {item: "Bag",price: 750}
]
let totalBill=cart.reduce((sum,p)=> sum +p.price,0);
console.log(totalBill);

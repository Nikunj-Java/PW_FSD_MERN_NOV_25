// sort in javascript is used to arrange array elements in order
//syntax: array.sort(compareFunction)
//by default it will sort an array as String Not as number

let fruits=["Banana","Apple","Mango","Orange"];
fruits.sort();
console.log(fruits); //arranged in alphabetical order


//number array
let nums= [10,35,3,56,6,100,20];
nums.sort();
console.log(nums); //wrong output, because it compares as string value

//correct solution
//number array
let numbers= [10,35,3,56,6,100,20];
numbers.sort(function(a,b){
    return a-b; //asceding order
});
console.log(numbers); //right output

//descending order
numbers.sort((a,b)=>b-a);
console.log(numbers);
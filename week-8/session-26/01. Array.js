let fruits=["apple","banana","Mango"];
let f_length= fruits.length;
console.log(fruits);

console.log("Element at 0 index:",fruits[0]);
console.log("Element at 1 index:",fruits[1]);
console.log("Element at 2 index:",fruits[2]);


// number array
let numbers= new Array(10,20,30)
console.log(numbers);
console.log("Element at index 2 is: ",numbers[2]);

//get the length of an array
console.log(numbers.length);

//Printing Value Dynamically
let length= numbers.length;
console.log("Printing Value Dynamically:"+numbers[length-2]);

//print array using iterating
//01. for loop
for (let i=0; i<length; i++){
    console.log(numbers[i]);
}

for (let i=0; i<f_length; i++){
    console.log(fruits[i]);
}

//apply for...of
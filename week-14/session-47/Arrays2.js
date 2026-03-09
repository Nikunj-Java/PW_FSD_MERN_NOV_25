// Arrays has 4 Methods
// 1. push -----> add an element at the end
// 2. pop  -----> remove the last element
// 3. shift -----> remove the first element
// 4. unshift-----> add an element at start and shift rest all elements

let fruits=["apple","banana","pineapple","kiwi","dragonFruit"];
console.log(fruits);
// adding the element at the last
fruits.push("Grapes");
console.log(fruits);

// adding the element at the first place [0] index
fruits.unshift("Guava");
console.log(fruits);

// remove the last element
fruits.pop();
console.log(fruits);

// remove the first element
fruits.shift();
console.log(fruits);


//indexOf Methods
console.log("is apple exist in the array? :",fruits.includes("apple"));
console.log("is papita exist in the array? :",fruits.includes("papita"));
//includes Methods
console.log("index of 'KIWI' :",fruits.indexOf("kiwi"));

//iterate the array
// using for loop
// using for each
fruits.forEach(function(item){
    console.log(item);
})

//slice an array
 //syntax: array.slice(startIndex,endindex);
console.log("Splicing An Array Between 1 and 3:",fruits.slice(1,3));
console.log(fruits.slice(2,5));

//splice ---> Remove and Add Elements(changes original Array)
//syntax: array.splice(startindex, deleteindex, item1,item2....);

//01.remove elements
console.log(fruits.splice(0,2)); //["apple","banana"];

//02.add elements
console.log("Adding Using Splice:",fruits.splice(2,0,"grapes"));  //start at index2 Remove 0 element, so nothing is deleted, only meant for adding
console.log(fruits);

//03.replace elements
console.log("Replace using Splice:",fruits.splice(1,1,"banana"));  //start at index1 Remove 1 element
console.log(fruits);

 
//joining an elements if an array using .join();
let result= fruits.join(",");
console.log(result);

//delete element using delete
delete fruits[0]; //keeping index but deleting an item
console.log(fruits);

//reversing an array using .reverse();
fruits.reverse();
console.log(fruits);

//converting an array toString
let numbers=[10,20,30];
console.log(numbers.toString());


//revision
// Methods Available in Array:
// Methods:push,pop,shift,unshift,slice,splice,reverse,toString,join,delete
// to print an array: for loop, for each loop
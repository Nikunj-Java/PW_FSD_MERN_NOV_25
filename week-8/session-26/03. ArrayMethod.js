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

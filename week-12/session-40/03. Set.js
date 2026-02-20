let numbers= new Set([1,2,3,3,4,5,5,6,7,8,8,9,10]);
console.log(numbers); // duplicate values will be removed

//Basic Methods
//1. add()
let fruits= new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");// duplicate value
console.log(fruits);

//2. has()-- check if value exist or not.
console.log(fruits.has("Apple"));
console.log(fruits.has("Mango"));

//3. delete()
fruits.delete("Banana");
console.log(fruits);

//4. size---> will return number of unique values
console.log(fruits.size);
console.log(numbers.size);

//5. clear()
fruits.clear();
console.log(fruits);

//6 Using For ...of
let colors= new Set(["Red","Yellow","Green","Blue"]);
for (let color of colors){
    console.log(color);
}

//7 for each
colors.forEach(value => {
    console.log(value);
});

// Note: Set Works with Different DataTypes

let data= new Set();
data.add(10);//number
data.add("Hello");//string
data.add({name:"Nikunj Soni"});//obj
console.log(data);
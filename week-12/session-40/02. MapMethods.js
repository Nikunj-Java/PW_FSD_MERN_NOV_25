let products= new Map();
//add data
products.set(1,"Laptop");
products.set(2,"Mobile");
products.set(3,"Tablet");
//get data
console.log(products.get(3));

//check if key exist?
console.log(products.has(1));
console.log(products.has(10));

//delete a key
products.delete(3);

//get the size of map
console.log(products.size);

//clear Entire map
products.clear();

//get the size of map
console.log(products.size);

//iterating throught the map
let myproduct= new Map([
    [1, "Laptop"],
    [2, "Mobile"],
    [3, "Tablet"]
])

for (let [key,value] of myproduct){
    console.log(key,value);
}
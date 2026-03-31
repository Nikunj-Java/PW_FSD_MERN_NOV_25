// this you can do by your own
// sort by Multiconditions
let users=[
    {name:"A", age:25},
    {name:"B", age:30},
    {name:"C", age:20},
    {name:"D", age:35},
    {name:"E", age:25},
    {name:"F", age:30}
]
users.sort((a,b) => {
    if(a.age === b.age){
        return a.name.localeCompare(b.name); // Sort by name if ages are equal
    }
    return a.age - b.age; // Sort by age
}); 
console.log(users);
// Output:  
// [
//   { name: 'C', age: 20 },    
//   { name: 'A', age: 25 },
//   { name: 'E', age: 25 },
//   { name: 'B', age: 30 },
//   { name: 'F', age: 30 },
//   { name: 'D', age: 35 }
// ]
    
let users=[
    {name:"A", age:25},
    {name:"B", age:30},
    {name:"C", age:20},
    {name:"D", age:35}
]
users.sort((a,b) => a.age - b.age);
console.log(users);
// Output:  
// [
//   { name: 'C', age: 20 },
//   { name: 'A', age: 25 },
//   { name: 'B', age: 30 },
//   { name: 'D', age: 35 }
// ]
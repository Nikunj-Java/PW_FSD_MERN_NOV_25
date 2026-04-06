// Intersection mems Combining multiple types into one. It allows you to create a new type that has all the properties of the combined types.
type A= {name: string}
type B= {age: number}

type Person= A & B;

let p: Person= {
    name: "John",
    age: 30
};
console.log(p.name); // Output: John
console.log(p.age);  // Output: 30
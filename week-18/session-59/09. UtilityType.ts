// 01. Partial<Type>
type User={
    name: string,
    age: number
}
type PartialUser = Partial<User>;

let u: PartialUser = {
    name: "Alice"
}
console.log("PartialUser: ", u); // Output: { name: 'Alice' }
// age is optional in PartialUser, so we can omit it when creating an instance of PartialUser.

//02. Readonly<Type>
type UserReadOnly = Readonly<User>;

let u2: UserReadOnly = {
    name: "Alice",
    age: 30
};
console.log("UserReadOnly:   ", u2); // Output: { name: 'Alice', age: 30 }
console.log("UserReadOnly.name: ", u2.name); // Output: Alice
console.log("UserReadOnly.age: ", u2.age); // Output: 30
// u2.name = "Bob"; 
// Error: Cannot assign to 'name' because it is a read-only property.

// 03 Pick<Type, Keys>
type UserName = Pick<User, "name">;

let u3: UserName = {
    name: "Alice"
}
console.log("UserName: ", u3); // Output: { name: 'Alice' }

// 04 Omit<Type, Keys>
type UserWithoutAge= Omit<User, "age">;

let u4: UserWithoutAge = {
    name: "Alice"
}
console.log("UserWithoutAge: ", u4); // Output: { name: 'Alice' }

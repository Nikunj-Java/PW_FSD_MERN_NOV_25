interface User{
    name: string,
    age: number
}

let user1: User={
    name:"Nikunj",
    age:25
}

let user2: User={
    name:"Nikunj",
     
};// age is missing
console.log(user1);
//console.log(user2); run: tsc , so it will give you an error

// Run :npx tsx app.ts
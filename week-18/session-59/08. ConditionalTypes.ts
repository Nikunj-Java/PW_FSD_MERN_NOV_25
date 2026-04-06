type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

let a: Test1 = true;
let b: Test2 = false;
console.log("Test1: ", a); // Output: true
console.log("Test2: ", b); // Output: false

type IsArray<T> = T extends any[] ? true : false;
type Test3 = IsArray<string[]>; // true
type Test4 = IsArray<number[]>; // true
type Test5 = IsArray<string>; // false
type Test6 = IsArray<number>; // false





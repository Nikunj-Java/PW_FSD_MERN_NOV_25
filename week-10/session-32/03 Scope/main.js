import {count,increment,decrement } from "./counter.js";

console.log("Initial Count:", count);
console.log("After Increment:", increment());
console.log("After Increment:", increment());
console.log("After Decrement:", decrement());
console.log("Final Count:", count);
//in javascript modules are loaded fisrt time and cached and then resued and rest code will work

// Strings in array
let arr= ["apple", "banana", "kiwi", "grapefruit", "fig"];

// Sort the array by length of strings
arr.sort((a, b) => a.length - b.length);

console.log(arr); // Output: ["fig", "kiwi", "apple", "banana", "grapefruit"]
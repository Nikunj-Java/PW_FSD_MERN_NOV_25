let pattern=/\.com$/; //-----> $=last word should be '.com'

console.log(pattern.test("google.com")); // true
console.log(pattern.test("google.in")); // false
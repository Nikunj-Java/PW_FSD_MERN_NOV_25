let pattern = /^[A-Za-z]+@[A-Za-z]+$/;
//explanation: [first letter or word must start with A-Za-z]+[must have @ and A-Za-z]+[ends with alphabets]

console.log(pattern.test("Hello@gmail")); //true
console.log(pattern.test("Hello@1234567")); //false

let pattern1 = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
//explanation: [first letter or word must start with A-Za-z]+[must have @ and A-Za-z]+[must have . and A-Za-z]+[ends with alphabets]

console.log(pattern1.test("Hello@gmail.com")); //true

let pattern2 = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
//explanation: [first letter or word must start with A-Za-z0-9]+[must have @ and A-Za-z0-9]+[must have . and A-Za-z]+[ends with alphabets]
console.log(pattern2.test("Hello12@gmail12.com")); //true


let pattern3 = /^[A-Za-z0-9._]+@[A-Za-z0-9]+\.[A-Za-z]+$/;
//explanation: [first letter or word must start with A-Za-z0-9]+[must have @ and A-Za-z0-9]+[must have . and A-Za-z]+[ends with alphabets]
console.log(pattern3.test("He.llo_12@gmail12.com")); //true
//nikunj_soni@gmail.com -->yahoo
//nikunj_soni@gmail.com ---> not allowed in google(_not allowed in google)
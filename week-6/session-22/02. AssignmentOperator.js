// Assignment Operators
// Assignment operators are used to assign values to variables.
// The most common assignment operator is the equal sign (=).
// There are also compound assignment operators that combine arithmetic operations with assignment.
// operators: =, +=, -=, *=, /=, %=, **=

var x= 10;  //assigning a value
console.log("Initial value of x: ", x); // 10

x +=5; // x = x + 5 // increase first and then assign
console.log("After x += 5: ", x); // 15

x -=3; // x = x - 3
console.log("After x -= 3: ", x); // 12

x *=2; // x = x * 2
console.log("After x *= 2: ", x); // 24
x /=4; // x = x / 4
console.log("After x /= 4: ", x); //6
x %=2; // x = x % 2
console.log("After x %= 2: ", x); // 0

let y=2;
y **=3; // y = y ** 3
console.log("After y **= 3: ", y); // 8
// Summary:
// =   : Simple assignment
// +=  : Addition assignment
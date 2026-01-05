//Bitwise Operators
// Bitwise operators are used to perform bit-level operations on binary representations of numbers.
// They operate on individual bits of the operands.
// operators: & (AND), | (OR), ^ (XOR), ~ (NOT)

console.log("Bitwise Operators Example:");
console.log(5 & 1); // 1  (0101 & 0001 = 0001)
console.log(5 | 1); // 5  (0101 | 0001 = 0101)
console.log(5 ^ 1); // 4  (0101 ^ 0001 = 0100)
console.log(~5);    // -6 (inverts bits of 5: 0101 -> 1010 which is -6 in two's complement)
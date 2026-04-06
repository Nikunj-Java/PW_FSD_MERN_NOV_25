// Force the type for const a to be string

let data: any = "Hello TypeScript!";

let dataLength: number=( data as string).length;

console.log(dataLength); // Output: 19

// alternative syntax:
let dataLength2= (<string>data).length;

console.log(dataLength2); // Output: 19
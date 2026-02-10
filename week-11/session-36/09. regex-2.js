let pattern=/^Hi/; // ^ means start of the text
console.log(pattern.test("Hi There"));//true
console.log(pattern.test("Hello Hi"));//false
let pattern=/\d/;// ------->  \d → digit (0–9) // check digits
console.log(pattern.test("abc"));//false
console.log(pattern.test("abc123"));//true
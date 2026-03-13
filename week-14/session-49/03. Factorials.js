// 5!= 5 x 4 x 3 x 2 x 1
function factorialNumber(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("Factorial of 5!: ",factorialNumber(10));
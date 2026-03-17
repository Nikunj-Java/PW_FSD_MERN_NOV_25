function analyzeExpenses(expenses) {
  let total = 0;
  let max = expenses[0];

  for (let amount of expenses) {
    total += amount;
    if (amount > max) {
      max = amount;
    }
  }
  return { total, max };
}
console.log(analyzeExpenses([200, 500, 100, 300]));

let expenses = [200, 500, 100, 300];

let total = 0;
let max = expenses[0];


for (let i = 0; i < expenses.length; i++) {
    total += expenses[i]; 

    if (expenses[i] > max) {
        max = expenses[i]; 
    }
}

console.log("Total:", total);
console.log("Max:", max);
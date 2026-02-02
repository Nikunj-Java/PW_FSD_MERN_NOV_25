import { calculate } from "./calculator.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDiv = document.getElementById("result");

document.getElementById("addBtn").addEventListener("click", () => run("add"));
document.getElementById("subBtn").addEventListener("click", () => run("subtract"));
document.getElementById("mulBtn").addEventListener("click", () => run("multiply"));
document.getElementById("divBtn").addEventListener("click", () => run("divide"));

function run(operation) {
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Result: Please enter valid numbers";
    return;
  }

  try {
    const result = calculate(operation, num1, num2);
    resultDiv.textContent = `Result: ${result}`;
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
  }
}

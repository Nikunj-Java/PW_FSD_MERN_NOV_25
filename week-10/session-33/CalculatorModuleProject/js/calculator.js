import { add } from "./operations/add.js";
import { subtract } from "./operations/subtract.js";
import { multiply } from "./operations/multiply.js";
import { divide } from "./operations/divide.js";

export function calculate(operation, num1, num2) {
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      throw new Error("Invalid operation");
  }
}

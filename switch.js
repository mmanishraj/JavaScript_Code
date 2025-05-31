import prompt from 'prompt';
let num1 = parseFloat(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number:"));
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    break;
  default:
    result = "Invalid operator";
}

alert("Result: " + result);
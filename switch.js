let num1 = 10
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = 20
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
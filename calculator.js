const input = require("prompt-sync")();
console.log("===========================================================");
console.log(" QuickCalc Calculator ");
console.log("===========================================================");
console.log("Operations: +, -, *, /, %, ** ");
console.log("===========================================================");

let number1 = Number(input("Enter the first number: "));
let Operator = input("Enter the operation(+, -, *, /, %, ** ): ");
let number2 = Number(input("Enter the second number: "));
let result;

switch (Operator) {
  case "+":
    result = number1 + number2;
    console.log("Operation: Addition");
    break;
  case "-":
    result = number1 - number2;
    console.log("Operation: Subtraction");
    break;
  case "*":
    result = number1 * number2;
    console.log("Operation: Multiplication");
    break;
  case "/":
    result = number1 / number2;
    console.log("Operation: Division");
    break;
  case "%":
    result = number1 % number2;
    console.log("Operation: Modulus");
    break;
  case "**":
    result = number1 ** number2;
    console.log("Operation: Exponential");
    break;
  default:
    console.log(
      "Invalid OPerator, Please use any one operator in this (+, -, *, /, %, **)"
    );

    process.exit(1);
}
console.log(`${number1}${Operator}${number2}=${result}`);
console.log(
  "======================================================================="
);
console.log("Thankyou for Using QuickCalc Calculator 😊");
console.log(
  "======================================================================="
);

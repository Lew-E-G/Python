const prompt = require("prompt-sync")();

let result;
let valid = true

function getNumber (stringNumber) {
  while (true) {
    let number = parseInt(prompt(`Enter number ${stringNumber}: `));
    if (isNaN(number)) {
      console.log("Invalid input")
    } else {
      return number;
    }
  }
}

function arithmatic(operator, number1, number2) {
  result = eval(number1+operator+number2);
  console.log(result)
}

const number1 = getNumber('One');
const number2 = getNumber('Two');
const operator = prompt("Enter a sign (+,-,/,*): ");

arithmatic(operator, number1, number2)

/*
switch (operator) {   //case is used as like an "in case" the operator inputted is blah, do blah
  case "+":
    arithmatic(operator,number1,number2)
    break;
  case "-":
    arithmatic(operator,number1,number2)
    break;
  case "/":
    arithmatic(operator,number1,number2)
    break;
  case "*":
    arithmatic(operator,number1,number2)
    break;
  default:
    console.log("invalid entry")
    valid = false;
    break;
}
*/
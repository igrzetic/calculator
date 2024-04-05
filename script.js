let firstNumber = prompt("Enter first number:", 5);
let operator = prompt("Enter operator (+, -, *, /)");
let secondNumber = prompt("Enter second number:", 3);

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

console.log("first number: " + firstNumber);
console.log("operator: " + operator);
console.log("second number: " + secondNumber);

switch (operator) {
    case "+":
        add(firstNumber, secondNumber);
        break;
    case "-":
        subtract(firstNumber, secondNumber);
        break;
    case "*":
        multiply(firstNumber, secondNumber);
        break;
    case "/":
        divide(firstNumber, secondNumber);
        break;

    default:
        alert ("Unknown operation");
        break;
    }


function add(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;

    console.log(firstNumber + " + " + secondNumber + " = " + result);

    return result;
}

function subtract(firstNumber, secondNumber) {
    let result = firstNumber - secondNumber;

    console.log(firstNumber + " - " + secondNumber + " = " + result);

    return result;
}

function multiply(firstNumber, secondNumber) {
    let result = firstNumber * secondNumber;

    console.log(firstNumber + " * " + secondNumber + " = " + result);

    return result;
}

function divide(firstNumber, secondNumber) {
    if(firstNumber == 0 || secondNumber == 0) {
        alert ("Cannot divide with 0.");
        return null;
    } else {
        let result = firstNumber / secondNumber;

        console.log(firstNumber + " / " + secondNumber + " = " + result);
        
        return result;
    }
}
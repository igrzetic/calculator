const display = document.querySelector(".display");
const numberBtn = document.querySelectorAll(".button");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

let firstNumber = "";
let operator = "";
let secondNumber = "";

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

equalsBtn.addEventListener('click', () => {
    if (!firstNumber || !operator || !secondNumber) return;

    const result = operate(operator, firstNumber, secondNumber);

    display.value = result.toString();
});

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);

        default:
            return null;
    }
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

numberBtn.forEach(number => {
    number.addEventListener("click", () => {
        if (!operator) {
            firstNumber += number.textContent;
            parseInt(firstNumber);
            display.value = firstNumber; 
        } else {
            secondNumber = number.textContent;
            display.value = secondNumber; 
        }
    });
});

console.log("First number: " + firstNumber);
console.log("Type of first number: " + typeof(firstNumber));
console.log("Second number: " + secondNumber);
console.log("Type of second number: " + typeof(secondNumber));
// console.log("Number btn value: " + numberBtn.value);

operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
        if (!firstNumber) return;
        operator = operatorBtn.textContent;
        display.value = operator;

        console.log("operator btn: " + typeof(operator));
    });
});

clearBtn.addEventListener("click", () => {
    display.value = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
});
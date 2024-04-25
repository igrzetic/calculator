let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const currentOperationScreen = document.getElementById('currentOperationScreen');
const lastOperationScreen = document.getElementById('lastOperationScreen');
const deleteBtn = document.getElementById('delete-btn');
const clearBtn = document.getElementById('clear-btn');
const negBtn = document.getElementById('neg-btn');
const percentageBtn = document.getElementById('percentage-btn');

const operatorBtn = document.querySelectorAll('.operator');
const numberBtn = document.querySelectorAll('.number');

const pointBtn = document.getElementById('point');
const equalsBtn = document.getElementById('equals-btn');

window.addEventListener('keydown', handleKeyboardInput);
deleteBtn.addEventListener('click', deleteNumber);
clearBtn.addEventListener('click', clear);
negBtn.addEventListener('click', negateNumber);
// percentageBtn.addEventListener('click', calculatePercentage);
pointBtn.addEventListener('click', appendPoint);
equalsBtn.addEventListener('click', evaluate);

numberBtn.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorBtn.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentOperationScreen.textContent += number;
}

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
}

function deleteNumber() {
    currentText = currentOperationScreen.textContent;
    if (currentText.length === 1 || currentText.charAt(0) === '-') {
        currentOperationScreen.textContent = '0'
    }
    else
        currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0, -1);
}

function clear() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function negateNumber() {
    if (currentOperationScreen.textContent === '0') return;
    if (currentOperationScreen.textContent[0] === '-') {
        currentOperationScreen.textContent = currentOperationScreen.textContent.slice(1);
    }
    else
    currentOperationScreen.textContent = '-' + currentOperationScreen.textContent;
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
        currentOperationScreen.textContent = '0';
    if (currentOperationScreen.textContent.includes('.')) return
        currentOperationScreen.textContent += '.';
}

function setOperation(operator) {
    if (currentOperation !== null) {
        evaluate();    
    }
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) {
        return;
    }
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
        currentOperationScreen.textContent = 'Error';
        return
    }
    secondOperand = currentOperationScreen.textContent;

    currentOperationScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    );
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
  if (e.key === '.') appendPoint()
  if (e.key === '=' || e.key === 'Enter') evaluate()
  if (e.key === 'Backspace') deleteNumber()
  if (e.key === 'Escape') clear()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    setOperation(convertOperator(e.key))
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return '×'
  if (keyboardOperator === '-') return '−'
  if (keyboardOperator === '+') return '+'
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            if (b === 0) return null;
            return divide(a, b);
        default:
            return null;
    }
}
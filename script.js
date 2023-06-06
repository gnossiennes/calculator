
class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

// clear previous operand, current operand, and operator. 
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined; 
    }

// backspace last input number
    bksp() {}

// add number to screen (transforms number parameter into string before concatting)
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

// get operator
    getOperator(operator) {}

// perform calculation
   calculate() {}

// update screen area
    updateCalcArea() {
        this.currentOperandText.innerText = this.currentOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-enter]');
const bkspButton = document.querySelector('[data-bksp]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText);

// create number buttons 0-9 and .
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateCalcArea();
    })
});

// create operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateCalcArea();
    })
})


/* 
const add = function(a,b) {
    return a + b;	
  };
  
  const subtract = function(a,b) {
    return a-b;
  };
  
  const sum = function(array) {
    const initialValue = 0;
    const totalValue = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue, initialValue
      );
    return totalValue;
  };
  
  const multiply = function(array) {
    const totalValue = array.reduce((a, b) => a * b, 1)
    return totalValue;
  };
  
  const power = function(a,power) {
      return a ** power;
  };
  
  const factorial = function(a) {
      // create array of number
    const array = [];
    for (let i = 1; i <= a; i++) {
      array.push(i);
    }
    // factorializing with reduce
    const initialValue = 1;
    const totalValue = array.reduce(
      (accumulator, currentValue) => accumulator * currentValue, initialValue
    )
    return totalValue;
  };
  
  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };
  */
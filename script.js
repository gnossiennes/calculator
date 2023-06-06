
class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

// clear previous operand, current operand, and operation. 
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; 
    }

// backspace last input number
    bksp() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

// add number to screen (transforms number parameter into string before concatting)
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

// get operation
    getOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

// perform calculation
   calculate() {
    let calculation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
        case '+':
            calculation = prev + current;
            break;
        case '-':
            calculation = prev - current;
            break;
        case '×':
            calculation = prev * current;
            break;
        case '÷':
            calculation = prev / current;
            break;    
        default:
            return;
    }
    this.currentOperand = calculation;
    this.operation = undefined;
    this.previousOperand = '';
   }

// add comma separators
   getCommas(number) {
    const floatNumber = parseFloat(number);
    if (isNaN(floatNumber)) return '';
    return floatNumber.toLocaleString('en');
   }

// update screen area
    updateCalcArea() {
        this.currentOperandText.innerText = this.getCommas(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandText.innerText = 
            `${this.getCommas(this.previousOperand)} ${this.operation}`;
        }
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
        calculator.getOperation(button.innerText);
        calculator.updateCalcArea();
    })
})

// calculates
equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateCalcArea();
})

// clears all 
clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateCalcArea();
})

// clears last entered digit
bkspButton.addEventListener('click', () => {
    calculator.bksp();
    calculator.updateCalcArea();
})
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;

    // Replace binary operators with JavaScript operators
    try {
        // Split the expression into components (numbers and operators)
        let result = evalBinaryExpression(expression);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function evalBinaryExpression(expression) {
    let operators = ['+', '-', '*', '/'];
    let operator;
    for (let op of operators) {
        if (expression.includes(op)) {
            operator = op;
            break;
        }
    }

    if (!operator) return parseInt(expression, 2); // Only a binary number

    let operands = expression.split(operator);
    let operand1 = parseInt(operands[0], 2);
    let operand2 = parseInt(operands[1], 2);
    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = Math.floor(operand1 / operand2); // Binary division should result in an integer
            break;
    }

    return result.toString(2); // Return the result as a binary string
}

let num1 = '';
let num2 = '';
let operation = '';
let result = null;

function addNum(n) {
    if (operation === '') {
    num1 += n;
    document.getElementById('display').value = num1;
    } else {
    num2 += n;
    document.getElementById('display').value = num2;
    }
}

function setOp(op) {
    if (num1 !== '') {
    operation = op;
    document.getElementById('display').value = '';
    }
}

function calculate() {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
    document.getElementById('display').value = 'Erro';
    return;
    }

    switch (operation) {
    case '+':
        result = n1 + n2;
        break;
    case '-':
        result = n1 - n2;
        break;
    case '*':
        result = n1 * n2;
        break;
    case '/':
        result = n2 !== 0 ? n1 / n2 : 'Erro';
        break;
    default:
        result = 'Erro';
    }

    document.getElementById('display').value = result;
    // Reset para novo cálculo
    num1 = result.toString();
    num2 = '';
    operation = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function clear() {
    num1 = '';
    num2 = '';
    operation = '';
    result = null;
    document.getElementById('display').value = '';
}
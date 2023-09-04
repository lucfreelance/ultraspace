let result = document.getElementById('result');

function addNumber(num) {
result.value += num;
}

function addDecimal() {
if (result.value.indexOf('.') == -1) {
result.value += '.';
}
}

function backspace() {
result.value = result.value.slice(0, -1);
}

function clearResult() {
result.value = '';
}

function operator(op) {
result.value += op;
}

function calculate() {
result.value = eval(result.value);
}
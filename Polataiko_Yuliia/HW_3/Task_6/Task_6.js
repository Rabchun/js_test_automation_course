const a = 30;
const b = 50;

function getSum(a, b) {
    const sum = a + b;

    return sum;
}

function getMultiply(a, b) {
    const multiply = a * b;

    return multiply;
}

console.log(`Sum of two numbers = ${a} + ${b} = ${getSum(a, b)}`);
console.log(`Multiplication of two numbers = ${a} * ${b} = ${getMultiply(a, b)}`);

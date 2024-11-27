const calc = function(a, b, operador) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

console.log(calc(1, 1, '+'))
console.log(calc(2, 1, '-'))
console.log(calc(2, 2, '*'))
console.log(calc(4, 2, '/'))
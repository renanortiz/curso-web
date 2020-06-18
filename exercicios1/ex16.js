function calcular (x, y, z) {
    switch(y) {
        case '+':
            return x + z
        case '-':
            return x - z
        case '*':
            return x * z
        case '/':
            return x / z
        default:
            return "Operação inválida"
    }
}

console.log(calcular(6, '+', 2))
console.log(calcular(6, '-', 2))
console.log(calcular(6, '*', 2))
console.log(calcular(6, '/', 2))
console.log(calcular(6, 'x', 2))
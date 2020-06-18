function pagar(x, anuidade) {
    if (x > 0 && x < 13) {
        x = x - 1
        return (anuidade * (1.05 ** x)).toFixed(2)
    } else {
        return 'Mês Inválido'
    }
}

console.log(pagar(4, 100))
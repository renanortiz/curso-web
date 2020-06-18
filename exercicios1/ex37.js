function pA(n, a1, r) {
    let resultado = []
    let soma = 0
    for (let i = 0; i < n; i++) {
        resultado[i] = a1 + (r * i)
        soma += resultado[i]
    }
    console.log(`Progressão aritmética: ${resultado}`)
    console.log(`Soma: ${soma}`)
}

function pG(n, a1, r) {
    let resultado = []
    let soma = 0
    for (let i = 0; i < n; i++) {
        resultado[i] = a1 * r**i
        soma += resultado[i]
    }
    console.log(`Progressão aritmética: ${resultado}`)
    console.log(`Soma: ${soma}`)
}

pA(10, 10, 10)
pG(10, 2, 2)
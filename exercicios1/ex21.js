function calcular (idade) {
    if (idade <= 10) {
        valor = 180
    } else if (idade <= 30) {
        valor = 150
    } else if (idade <= 60) {
        valor = 195
    } else {
        valor = 230
    }
    console.log(`Valor para a idade de ${idade} anos: R$${valor}.`)
}

calcular(5)
calcular(25)
calcular(50)
calcular(99)
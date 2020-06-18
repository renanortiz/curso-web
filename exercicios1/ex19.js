function pedido(cod, qtd) {
    switch (cod) {
        case 100:
            valor = qtd * 3
            console.log(`Valor total: R$${valor.toFixed(2)}`)
            break
        case 200:
            valor = qtd * 4
            console.log(`Valor total: R$${valor.toFixed(2)}`)
            break
        case 300:
            valor = qtd * 5.5
            console.log(`Valor total: R$${valor.toFixed(2)}`)
            break
        case 400:
            valor = qtd * 7.5
            console.log(`Valor total: R$${valor.toFixed(2)}`)
            break
        case 500:
            valor = qtd * 3.5
            console.log(`Valor total: R$${valor.toFixed(2)}`)
            break
        case 600:
            valor = qtd * 2.8
            console.log(`Valor total: R$${valor.toFixed(2)}`)
            break
        default:
            console.log("Produto não cadastrado.")
    }
}

pedido(100,2)
pedido(200,2)
pedido(300,2)
pedido(400,2)
pedido(500,2)
pedido(600,2)
pedido(700,2)
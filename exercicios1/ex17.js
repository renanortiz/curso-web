function calcula (plano, salario) {
    switch (plano) {
        case 'A':
            novo = salario * 1.1
            console.log(`Novo salário: R$${novo}`)
            break
        case 'B':
            novo = salario * 1.15
            console.log(`Novo salário: R$${novo}`)
            break
        case 'C':
            novo = salario * 1.2
            console.log(`Novo salário: R$${novo}`)
            break
        default:
            console.log("Plano inválido")
            break
    }
}

calcula('A', 1000)
calcula('B', 1000)
calcula('C', 1000)
calcula('D', 1000)
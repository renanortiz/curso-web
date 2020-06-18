function notas(x) {
    console.log(`Valor solicitado-> R$${x}:`)
    if ((x / 100) >= 1) {
        y = Math.floor(x/100)
        console.log(`${y} nota(s) de R$ 100.`)
    }
    x = x % 100
    if ((x / 50) >= 1) {
        y = Math.floor(x/50)
        console.log(`${y} nota(s) de R$ 50.`)
    }
    x = x % 50
    if ((x / 10) >= 1) {
        y = Math.floor(x/10)
        console.log(`${y} nota(s) de R$ 10.`)
    }
    x = x % 10
    if ((x / 5) >= 1) {
        y = Math.floor(x/5)
        console.log(`${y} nota(s) de R$ 5.`)
    }
    x = x % 5
    if ((x / 1) >= 1) {
        y = Math.floor(x/1)
        console.log(`${y} nota(s) de R$ 1.`)
    }
}

notas(133)
notas(57)
notas(166)
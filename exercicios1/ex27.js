function calcCrescimento (altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        console.log('Alturas iguais.')
    } else {
        if (altura1 < altura2) {
            console.log('Criança 1 menor que criança 2.')
            if (taxa1 > taxa2) {
                calcTempo (altura1, taxa1, altura2, taxa2)
            } else {
                console.log('Criança menor não ira ultrapassar a maior.')
            }
        }
        if (altura2 < altura1) {
            console.log('Criança 2 menor que criança 1.')
            if (taxa2 > taxa1) {
                calcTempo (altura2, taxa2, altura1, taxa1)
            }
            else {
                console.log('Criança menor não ira ultrapassar a maior.')
            }
        }
    }
}

function calcTempo (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let anos = 0
    while (alturaMenor <= alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        anos++
    }
    console.log(`A criança menor ultrapassará a maior em ${anos} anos.`)
}

calcCrescimento(150, 2, 130, 4)
calcCrescimento(150, 2, 130, 1)
calcCrescimento(120, 2, 130, 4)
calcCrescimento(110, 3, 130, 2)
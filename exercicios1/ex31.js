function negativos (vetor) {
    let qtd = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            qtd++
        }
    }
    console.log(`${qtd} negativos.`)
}

vetor1 = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5]
negativos(vetor1)
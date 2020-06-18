function checar (vetor) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    console.log(`${dentro} números dentro do intervalo e ${fora} números fora do intervalo.`)
}

vetor1 = [1, 11, 15, 20, 25, 28]
checar(vetor1)
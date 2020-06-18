function conceitos(vetor) {
    // let conceito
    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0 || vetor[i] > 10) {
            conceito = "Nota Inválida"
        } else if (vetor[i] <= 4.9) {
            conceito = "D"
        } else if (vetor[i] <= 6.9) {
            conceito = "C"
        } else if (vetor[i] <= 8.9) {
            conceito = "B"
        } else {
            conceito = "A"
        }
        console.log(`${vetor[i]} = ${conceito}`)
    }
}

conceitos([-1, 11, 4, 6, 8, 10])
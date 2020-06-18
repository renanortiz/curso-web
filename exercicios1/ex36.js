function multiplicar (vetor, num) {
    for (i = 0; i< vetor.length; i++) {
        vetor[i] = vetor[i] * num
    }
    console.log(vetor)
}

function multiplicarMaior5 (vetor, num) {
    if (num > 5) {
        for (i = 0; i < vetor.length; i++) {
            vetor [i] = vetor[i] * num
        }
        console.log(vetor)
    } else {
        console.log("Número passado não é maior que 5.")
    }
}

multiplicar([1,2,3,4,5], 3)
multiplicarMaior5([1,2,3,4,5], 3)
multiplicarMaior5([1,2,3,4,5], 6)
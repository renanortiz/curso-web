// Somar valores dos vetores
/* let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function soma (vetor1, vetor2) {
    vetorResultado =[]
    for (i = 0; i < vetor2.length; i++) {
        vetorResultado.push(vetor1[i] + vetor2[i])
    }
    console.log(vetorResultado)
}

soma(vetorPilha, vetorAdiciona) */

// Adicionar valores do vetor 2 no vetor 1
let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function soma (vetor1, vetor2) {
    for (i = 0; i < vetor2.length; i++) {
        vetor1.push(vetor2[i])
    }
    console.log(vetor1)
}

soma(vetorPilha, vetorAdiciona)
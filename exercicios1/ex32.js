// Versão 1
/*  function calcMedia (vetor) {
    let media = 0
    for(let i = 0; i < vetor.length; i++) {
        media += vetor[i]
    }
    media = media / vetor.length
    console.log(`Média aritmética: ${media}.`)
}

vetor1 = [1, 3, 5, 7, 9, 11]
calcMedia(vetor1) */

function calcMedia (vetor) {
    const soma = (total, valor) => total + valor
    let media = vetor.reduce(soma) / vetor.length
    console.log(`Média aritmética: ${media}.`)
}

vetor1 = [1, 3, 5, 7, 9, 11]
calcMedia(vetor1)
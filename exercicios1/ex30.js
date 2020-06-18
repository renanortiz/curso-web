function checar (vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    console.log(`Maior valor: ${maior}. Menor valor: ${menor}`)
}

vetor1 = [3, 17, 124, 25, 2, 89]
checar(vetor1)
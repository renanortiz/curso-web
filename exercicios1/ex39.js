function trocar(vetor1, vetor2) {
    for (i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log(`Vetor 1: ${vetor1}`)
    console.log(`Vetor 2: ${vetor2}`)
}

trocar([1, 2, 3], [4, 5, 6])
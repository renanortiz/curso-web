function listaImpar (inicio = 0, fim = 100) {
    if (inicio > fim) {
        fim2 = inicio
        inicio = fim
        fim = fim2
    }

    for (i = inicio; i<= fim; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

listaImpar(50, 4)
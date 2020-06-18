function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

function classificar (nota) {
    let notaNova = arredondar(nota)
    if (notaNova >= 40) {
        console.log("Aprovado com nota: " + notaNova)
    }
    else {
        console.log("Reprovado com nota " + notaNova)
    }
}

classificar(100)
classificar(30)
classificar(38)
classificar(88)
classificar(61)
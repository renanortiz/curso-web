function duplicateEncode(word) {
    let texto = word.split("")
    let novoTexto = []
    let repete = false
    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < texto.length; j++) {
            if (texto[i] == texto[j]) {
                repete = true
            }
        }
        if (repete == true) {
            novoTexto[i] = ')'
        } else {
            novoTexto[i] = '('
        }
        repete = false
    }
    novoTexto = novoTexto.join("")
    return novoTexto
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success"))
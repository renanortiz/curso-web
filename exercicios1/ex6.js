function primeira (capital,juros,tempo) {
    valor = capital + (capital * juros * tempo)
    return valor.toFixed(2)
}

function segunda (x,y,z) {
    valor = x * (1 + y) ** z
    return valor.toFixed(2)
}

console.log(primeira(100,0.1,2))
console.log(segunda(100,0.1,2))
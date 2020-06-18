function bhaskara (a, b, c) {
    let resultado = []
    let delta = b ** 2 - (4 * a * c)
    if (delta < 0) {
        return "Delta é negativo"
    } else {
        r1 = (- b + Math.sqrt(delta)) / 2 * a
        r2 = (- b - Math.sqrt(delta)) / 2 * a
        resultado.push(r1)
        resultado.push(r2)
        return resultado
    }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, -3, -5))
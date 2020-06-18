function lerNum (x) {
    switch (x) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        default:
            return 'Número fora do intervalo'
    }
}

console.log(lerNum(0))
console.log(lerNum(1))
console.log(lerNum(2))
console.log(lerNum(3))
console.log(lerNum(4))
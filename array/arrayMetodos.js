const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // add no ultimo
console.log(pilotos)

pilotos.shift() // remove 1 elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // add no 1
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)  // remove elemento na pos3

const algunsPilotos1 = pilotos.slice(2) // novo array a partir da pos2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir de 1, excluindo o 4
console.log(algunsPilotos2)
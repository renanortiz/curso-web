/* const prod1 = {
    nome: '...',
    preço: 45
}

const prod2 = {
    nome: '...',
    preço: 1234
} */

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
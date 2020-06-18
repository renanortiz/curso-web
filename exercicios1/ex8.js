let pontuacao = "10 20 20 8 25 3 0 30 1"
// let pontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function calc (pontuacao) {
    let pontos = pontuacao.split(" ")
    let quebraRecorde = 0
    let piorJogo = 1
    let maiorPont = pontos[0]
    let menorPont = pontos[0]

    for (let i = 0; i < pontos.length; i++) {
        if (pontos[i] > maiorPont) {
            maiorPont = pontos[i]
            quebraRecorde++
        } else if (pontos[i] < menorPont) {
            menorPont = pontos[i]
            piorJogo = i + 1;
        }
    }

    return [quebraRecorde, piorJogo]
}

console.log(calc(pontuacao))
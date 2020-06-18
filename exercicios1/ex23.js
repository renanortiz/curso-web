function calcular (cod, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort()
    
    let media = (((notas[0] * 3) + (notas[1] * 3) + (notas[2] * 4)) / 10).toFixed(2)
    console.log(`Código aluno: ${cod}
Nota 1: ${nota1.toFixed(2)}
Nota 2: ${nota2.toFixed(2)}
Nota 3: ${nota3.toFixed(2)}
Média: ${media}
Situação: ${media < 5 ? 'Reprovado' : 'Aprovado'}`)
}

calcular('ABC', 8.5, 7.25, 5.75)
function teste1(num) { 
    if(num > 7)  // sem '{}', considera só 1 linha no if
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuidado com ';', não usar com estrutura de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)
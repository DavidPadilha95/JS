function getInteriAleatorioEntre(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

do { 
    opcao = getInteriAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}while (opcao !=-1) //Ele vai validar apenas no final do bloco, fazendo com que seja executado pelo menos uma vez
console.log('Até a próxima')
// O while é mais apropriado quando nao temos um numero definido de repetições

function getInteriAleatorioEntre(min, max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao !=-1){ //Enquanto a variavel opcao for diferente de -1
    opcao = getInteriAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}
console.log('Até a próxima')
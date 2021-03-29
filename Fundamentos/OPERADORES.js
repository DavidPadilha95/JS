//OPERADORES ARITMETICOS

const [a,b,c,d] = [3,5,1,15] // Com o operdaor destructuing, dessa forma a gente cria variaveis mais rapido

const soma = a+b+c+d
const sub = d-b
const mul = a*b
const divisao = d/2
const modulo = a %2 //vai pegar o resto da divisao

//OPERADORES RELACIONAIS
console.log('01)', '1' == 1) // (é igual) nesse caso estou comparando o valor e nao o tipo
console.log('02)', '1' === 1) // (é EXTREMAMENTE igula) nesse caso estou comparando o valor E O TIPO
console.log('03)', '3' != 3) // (É diferente) aqui nao compara o tipo
console.log('03)', '3' !== 3) // (É EXTREMAMENTE diferente) aqui compara o tipo

// OPERADORES  LOGICOS
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU
    const comprarTv50 = trabalho1 && trabalho2 //And (E)
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //XOR
    const manterSaudavel = !comprarSorvete // negação logica

    return {comprarSorvete,comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
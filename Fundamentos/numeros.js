const peso1 = 1.0
const peso2 = Number('2.0') // Outra forma de criar um number com string

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.645
const avaliacao2 = 6.465

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1+peso2)

console.log(media.toFixed(2)) //toFixed serve para informar que eu só quero duas casas decimais
console.log(media.toString(2)) // Converte o valor inteiro para binario
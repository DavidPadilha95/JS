const escola = 'Cod3r'

console.log(escola.charAt(4)) // Pega a quarta letra, contando a partir de zero
console.log(escola.charCodeAt(3)) // pega o valor da letra na tabel ask
console.log(escola.indexOf('C')) // Ele diz em qual index se encontra a letra procurada
console.log(escola.substring(1)) //a partir do index 1 que sera apresentado
console.log(escola.substring(0, 3)) //a partir do index 0 vai apresentar até o index 2

console.log('Escola '.concat(escola).concat("!")) // vai concatenar as palavras
console.log('Escola ' + escola + "!") // vai concatenar as palavras (OUTRA FORMA)

console.log(escola.replace(3, 'e')) // vai trocar o numero 3 pela letra e
console.log(escola.replace(/\d/, 'e')) // vai trocar todos os numeros pelo e
console.log(escola.replace(/\w/g, 'e')) // vai trocar tudo pelo e


console.log('Ana,Maria,Pedro'.split(',')) // gera um array, pegando a virgula como separador 

// Função é um trecho de codigo que pode ser usado no codigo ao ser chamado
console.log(typeof Object)

class Produto { }
console.log(typeof Produto)

// Função sen retorno

function imprimirSoma(a, b) {
    console.log(`o valor da soma é ${a + b}`)
}

imprimirSoma(2, 3)

// Função com retorno

function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 5))
console.log(soma(2)) // o resutado sera 3 porque eu defini o b como 1

// Armazenando um função em uma variavel
const imprimirAdicao = function (a, b) {
    console.log(a + b)
}
imprimirAdicao(2, 3)

// Armazenando um função arrow em uma variavel
const add = (a, b) => {
    return a + b
}
console.log(4 + 9)

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
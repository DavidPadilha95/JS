// Novo recurso do ES2015
// É uma forma de extrair atributos do objeto ou do array

// EXEMPLO COM OBJETO
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua maratona',
        numero: 1000
    }
}

const {nome, idade} = pessoa //aqui estou tirando os atributos nome e idade do objeto pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa //aqui estou tirando os atributos nome e idade e já adicionando a uma variavel do objeto pessoa
console.log(n, i)

const {sobrenome, bemHumorada=true} = pessoa //aqui estou tirando os atributos que não existem
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa // tirando atributos de dentro de um objeto dentro de outro objeto
console.log(logradouro, numero,cep)

///////////////////////////////////////////////

//EXEMPLO COM ARRAY
const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5, n6=0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8,8], [9,6,8]]
console.log(nota)

// EXEMPLO COM FUNÇÃO
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))

// EXEMPLO COM ARRAY
function rand([min = 0, max = 1000]) {
    if (min > max) [min,max] = [max,min] // Aqui estou invertando o min com o maximo SE o minimo for maior que o maximo
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
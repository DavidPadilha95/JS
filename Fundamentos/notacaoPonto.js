console.log(Math.ceil(6.1)) // vai arredondar para mais


const obj1 = {}
obj1.nome = 'Bola'
console.log (obj1.nome)

function Obj (nome) {
    this.nome = nome
    this.exec = function() {
        console.log('teste...')
    }
} // o this torna o atributo publico

const obj2 = new Obj('Cadeira') //Estou chamando atraves de function
const obj3 = new Obj('Mesa') //Estou chamando atraves de function
obj3.exec() //Estou chamando atraves de function outra function

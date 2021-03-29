//Try serve para tratar um possível erro no codigo o catch vai dizer o que fazer caso ocorra o erro e o trhow é o comportamento que sera apresentado

function tratarErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    throw {
        nome:erro.name,
    }
}

function imprimirNomeGritando (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)
{ { { { var sera = 'Sera??' } } } }
console.log(sera)



function teste () {
    var local = 123
}

teste()
console.log(teste)

//Var só pode ser a nível global ou no escopo de função

var numero = 1
{
    var numero=2
    console.log(`Dentro ${numero}`)
}
console.log (`fora ${numero}`)
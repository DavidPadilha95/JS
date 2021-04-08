// criar de forma literal
function fun1() {}

// Armazenar um função
const fun2 = function() {}

//Armazenar em um array
const array = [function(){}]

//Armazenar em uma tributo de objeto
const obj = {}
obj.falar = function() {return'opa'}
console.log(obj.falar())

//Passar funcção como parametro
function run(fun){
    fun()
}

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
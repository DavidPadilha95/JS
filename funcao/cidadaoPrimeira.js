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


//EX 4
const mostrar = (a, b) => {
  console.log(`O valor da divisao é ${a/b.toFixed(2)}`)
  console.log(`O resto é ${a%b}`)
}

mostrar(8,3)
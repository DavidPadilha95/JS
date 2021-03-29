const imprimirRsultado = function(nota) {
    if(nota>=7){
        console.log(`Aprovado com ${nota}`)
    } else{
        console.log(`Deu ruim, sua nota foi ${nota}`)
    }
}

imprimirRsultado(8)
imprimirRsultado(5)

// Escrevendo com arrow function


const imprimirResultado = (a,b) =>{
    let nota = a + b
    if(nota>=7){
        console.log(`Aprovado com ${nota}`)
    } else{
        console.log(`Deu ruim, sua nota foi ${nota}`)
    }
}


imprimirResultado(1,3)
imprimirResultado(9,0)
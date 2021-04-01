Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}// aqui vai retornar quando o numero for maior que o numero(inicio) e menor que o numero (fim)


const imprimirResultado = (nota) =>{
    if (nota.entre(9,10)){
    console.log("Quadro de honra")
    } else if (nota.entre(7,8.99)){
        console.log("Aprovado")
    }else if (nota.entre(4,6.99)){
        console.log("Recuperação")
    }else if (nota.entre(0,3.99)){
        console.log("Reprovado")
    }else {
        console.log("Nota invalida")
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(11)
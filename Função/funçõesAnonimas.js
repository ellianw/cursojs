const soma = function (x,y) {
    return x+y
}

const imprimirResultado = function (a,b,operaçao = soma) {
    console.log(operaçao(a,b));
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function (x,y) {
    return x-y
})

const pessoa = {
    falar: function () {
        console.log("Opa!");
    }
}
 
pessoa.falar()
console.log(soma(3,4));

//function declaration -- Chamar em qualquer lugar
function soma(x,y) {
    return x=y
}

//Function expression -- Chamar após declarar
const sub = function (x,y) {
    return x-y
}
console.log(sub(3,4));

//Named Function expression -- Chamar após declarar
const mult = function mult(x,y) {
    return x*y
}
console.log(mult(3,4));
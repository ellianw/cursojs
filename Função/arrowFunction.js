let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI));

let ola = function () {
    console.log('olá');
}

ola = () => 'olá'
ola = _ => 'olá' //Possui um parametro
console.log(ola());
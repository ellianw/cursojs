console.log(Math.ceil(6.1)) //Usar ponto para acessar função(ceil) dentro de um objeto(Math)

const obj1 = {}
obj1.nome = 'Bola' //Cria o Atributo
//obj1['nome'] = 'bola2' //Funciona de forma igual ^
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
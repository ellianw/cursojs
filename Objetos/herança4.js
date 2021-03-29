function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__); //Objeto criado por função construtora o prototype aponta para a função
console.log(MeuObjeto.prototype === obj1.__proto__); 

MeuObjeto.prototype.nome = 'Anônimo' //Protipo tem o atributo, logo outros objetos com esse prototype tbm terão
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`);
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Mudando o protptype
obj3.nome = 'Obj3'
obj3.falar()

//Resumo:
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype); //Por padrão aponta para Function
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); 
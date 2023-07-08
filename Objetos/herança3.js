const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai) //Cria com o protótipo "pai"
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, { //Cria com protótipo e valores
    nome: {value: 'Luana', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) {
    //console.log(key);
    filha2.hasOwnProperty(key) ?//Tem a propriedade/pertence a ela
        console.log(`Pertence ao objeto: ${key}`) : console.log(`Por herança: ${key}`);
}
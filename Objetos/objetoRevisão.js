// Coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = "Cadeira"
produto["Marca do produto"] = "Generica"
produto.preço = 220

console.log(produto);
delete produto.preço //Deleta atributo objeto
delete produto["Marca do produto"]
console.log(produto);

const carro = {
    modelo : "a4",
    valor : 89000,
    proprietário: {
        nome: "Raul",
        idade: 56,
        endereço: {
            logradouro: "Rua 1",
            numero: 123
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //Pode ter uma função
    }
}

carro.proprietário.endereço.numero = 1000
carro['proprietário']['endereço']['logradouro'] = "Av gigante"
console.log(carro);

//delete carro.condutores
delete carro.proprietário.endereço
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);
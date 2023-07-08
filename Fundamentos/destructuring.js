const pessoa = {
    nome: 'Ana',
    idade: 10,
    endereço: {
        logradouro: "Rua Um",
        numero: 123
    }
}

const { nome, idade } = pessoa //Tire nome e idade do objeto pessoa.
console.log(nome,idade)

const { nome: n, idade: i } = pessoa //Dá o valor a uma variavel diferente
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa //Se não encontrar nenhum valor, passa o valor padrão de true
console.log(sobrenome, bemHumorada)
const {endereço: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
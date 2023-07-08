// Pessoa -> 123(Endereço de memória) -> {...}(objeto)
const Pessoa = {nome:'João'} //Constante pessoa não pode ser alterada
Pessoa.nome = 'Pedro'
console.log(Pessoa);

// Pessoa -> 456 -> {...} //Não podera apontar/atribuir para outro objeto
// Pessoa = {nome: 'Ana'}

Object.freeze(Pessoa) //Congela o objeto, não é possível mais mexer no objeto

Pessoa.nome = 'Maria'
Pessoa.end = 'Rua ABC'
delete Pessoa.nome

console.log(Pessoa.nome);
console.log(Pessoa);

const PessoaConstante = Object.freeze({nome:'João'} )
PessoaConstante.nome = 'Luiz'
console.log(PessoaConstante);
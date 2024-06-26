// Object.preventExtensions         previne extender o OBJ
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(('Extensível:', Object.isExtensible(produto)));

produto.nome = 'Borracha'
produto.descrição = 'Borracha escolar branca'
delete produto.tag
console.log(produto);

// Object.seal     Sela o objeto, apenas mudar valores produtos
const pessoa =  {nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);
function criarProduto(nome,preço) {
    return {
        nome,
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook",2199.99))
console.log(criarProduto("Ipad", 1199.49));
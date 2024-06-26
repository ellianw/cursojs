const sequencia = {
    _valor: 1, //Convenção
    get valor() { return this._valor++},
    set valor(valor) { //Funções com atributos diferentes apenas com set/get
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor);
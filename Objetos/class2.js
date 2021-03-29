class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //Tera como prototipo avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //Superclasse = avo, Chama a superclasse(construtor) de avo,
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho);
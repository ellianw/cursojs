//Par nome/valor
const saudação = 'Opa' // Contexto Léxico 1 

function exec() {
    const saudação = 'Fala' // Contexto Léxico 2 
    return saudação // Contexto fechado da função, primeiro procura no contexto fechado
}

// Objetos são grupos aninhados de nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua cinco',
        numero: 123
    }
}
console.log(saudação)
console.log(exec())
console.log(Cliente)
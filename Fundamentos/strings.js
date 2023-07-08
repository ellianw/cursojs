const escola = 'Cod3r'

console.log(escola.charAt(4)) // Detecta o caracter na posição X, começando em 0
console.log(escola.charAt(5)) // Quando não tem caracter na posição, retorna um valor vazio
console.log(escola.charCodeAt(3)) // Converte o caracter em valor Unicode
console.log(escola.indexOf('3')) // Retorna a posição no indice do valor X
console.log(escola.substring(1)) // Retorna a string apartir do indice X
console.log(escola.substring(0,3)) // Retorna a string do indice X até o Y, não retornando o Y
console.log('Escola '.concat(escola).concat("!")) // "Junta" as strings 
console.log(escola.replace(3,'e')) // Troca o indice X pelo indice Y
console.log('Ana,Maria,Pedro'.split(','))
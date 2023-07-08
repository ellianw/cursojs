const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5,n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [,[,nota]] = [[,8,8], [9,6,8]] //Ignora o primeiro elemento(primeiro array) e o primeiro elemento do segundo array
console.log(nota)

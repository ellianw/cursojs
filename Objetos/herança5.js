console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);  // Toda função tem um .prototype

String.prototype.reverse = function () {
    return this.split("").reverse().join('') //This = string
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0] //This = Array
}

console.log([1,2,3,4,5].first());
console.log(['A','B','C'].first());

String.prototype.toString = function () {
    return 'Deu Bug!'
}

console.log('Escola Cod3r'.reverse());
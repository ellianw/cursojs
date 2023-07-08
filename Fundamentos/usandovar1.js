{
    {
        {
            {
                var sera = "Será????" // Blocos não interferem
                console.log(sera) // var visível dentro e fora do bloco
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local) //Dentro de função só na função
}
teste()

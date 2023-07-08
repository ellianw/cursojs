function Sóboanoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com:'+nota);
    }
}

Sóboanoticia(8.1)
Sóboanoticia(6.1)

function SeForVerdade(valor) {
    if (valor) {
        console.log("É verdade..."+valor)
    }
}
SeForVerdade()
SeForVerdade(null)
SeForVerdade(undefined)
SeForVerdade(NaN)
SeForVerdade('')
SeForVerdade(0)
SeForVerdade(-1)
SeForVerdade(' ')
SeForVerdade("?")
SeForVerdade([])
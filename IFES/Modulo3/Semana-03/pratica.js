const prompt = require("prompt-sync")();

var somaPar = 0
var somaImpar = 0

for (i=1; i <= 20; i++){
    var potencia = i**2; 
    console.log(potencia)

    if (potencia % 2 == 0) {
        somaPar += potencia
    } else {
        somaImpar += potencia
    }
  
}

console.log("A soma de quadrados pares: ", somaPar)
console.log("A soma de quadrados ímpares: ", somaImpar)

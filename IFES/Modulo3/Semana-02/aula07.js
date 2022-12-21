// Positivo, negativo, zero

// importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// comando para entrada de dados do usuário
num = parseInt(prompt('Digite um número: '))

// Checa se num é + - 0
if (num > 0) {
    console.log("O número: ", num, "é positivo.\n")
} else if (num <0){
    console.log("O número: ", num, "é negativo.\n")
} else {
    console.log("O número: ", num, "é zero.\n")
}
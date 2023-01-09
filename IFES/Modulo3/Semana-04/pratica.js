const prompt = require("prompt-sync")();

var alturas = [];

for (var i = 0; i <= 9; i++) {
    var altura = parseFloat(prompt("Digite a altura: "));
    alturas.push(altura)
}

console.log(alturas)

for (var i = 0; i < alturas.length; i++) {
    var nAlunos = 0;
    for (var j = 0; j < alturas.length; j++){

        if (alturas[i] > alturas[j]) {
            nAlunos++
        }
    }

    // console.log(`O aluno ${i} é maior que ${nAlunos} Aluno(s)`)
    console.log('O aluno', i, 'é maior que', nAlunos, 'Aluno(s)')
}
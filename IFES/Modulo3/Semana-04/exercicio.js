const prompt = require("prompt-sync")();

nome = prompt("Digite seu nome: ");
var salarioBruto = parseInt(prompt("Digite seu salário bruto: "));
var dependentes = parseInt(prompt("Digite o número de dependentes: "));
var salarios = [salarioBruto]

for (i=1; i <= 10; i++) {
  var salarioBruto = parseFloat(prompt("Digite a altura: "));
}

console.log("Salários lista: ", salarios)
// console.log("Salário bruto: ", salarioBruto)

// var rendaPercapta = salarioBruto/(dependentes+1)
// console.log("Renda por pessoa: ", rendaPercapta)

// if (rendaPercapta < 500){
//   console.log("Vc está insento do IR")
// } else if (rendaPercapta < 1903.99) {
//   ir = salarioBruto*0.05
//   console.log("IR a pagar: ", ir)
// } else if (rendaPercapta < 2826.66) {
//   ir = salarioBruto*0.075
//   console.log("IR a pagar: ", ir) 
// } else {
//   ir = salarioBruto*0.15
//   console.log("IR a pagar: ", ir)
// }

// console.log("Renda Líquida: ", (salarioBruto - ir))

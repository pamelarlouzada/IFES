// AULA 07 - COMANDOS DE DECISÃO
const prompt = require('prompt-sync')();
// x = parseFloat(prompt("Digite o valor de x: "))
// console.log("Triângulo Equilátero")


// 1. Crie um algoritmo que receba pelo teclado o nome de um aluno e três notas. Ao final,
// deverá ser exibido o nome do aluno, sua média e o resultado (se for acima ou igual a 6, o
// aluno estará “aprovado”; se não for, estará “reprovado”).

// nome = prompt("Nome: ")
// n1 = parseFloat(prompt("Nota 1: "))
// n2 = parseFloat(prompt("Nota 2: "))
// n3 = parseFloat(prompt("Nota 3: "))

// media = (n1+n2+n3)/3

// if (media >= 6) {
//     resultado = "Aprovado!"
// } else {
//     resultado = "Reprovado!"
// }

// console.log("Aluno:", nome, "\nMédia:", media, "\nVocê foi", resultado)



// 2. Usando o algoritmo do exercício anterior, altere o resultado para: Média <=3, “reprovado”,
// Média < 6, “recuperação” e Média >=6, “aprovado”.

// if (media <=3 ) {
//     resultado = "Reprovado"
// } else if (media <= 6 ){
//     resultado = "Reprovado!"
// } else {
//     resultado = "Aprovado!"
// }

// console.log("Aluno:", nome, "\nMédia:", media, "\nVocê foi", resultado)

// 3. Crie um algoritmo em que, dada a tabela a seguir, calcula e exibe na tela o valor de
// desconto a ser concedido para um determinado cliente, de acordo com o valor da compra.
// O algoritmo deverá receber pelo teclado o nome do cliente e o valor total da compra

// Valor da compra                     |% de desconto
//------------------------------------------------------
// Abaixo de R$ 1.000,00               |5
// Entre R$ 1.000,00 a R$ 5.000,00     |10
// Acima de R$ 5.000,00                |15

compra = parseFloat(prompt("Digite o valor da compra em (R$): "));

if (compra <= 1000){
  desconto = compra * 5 / 100;
}else if ((compra > 1000) && (compra <= 5000)){
  desconto = compra * 10 / 100;
}else{
  desconto = compra * 15 / 100;
}
   
console.log("O valor do desconto: R$ " , desconto);

//________________________________________________________________________________________
// AULA 08 - COMANDOS DE DECISÃO ANINHADOS

// 1. Crie um algoritmo, utilizando a linguagem JavaScript que leia dois números.
// Caso os dois números sejam positivos você deve testá-los para exibir as seguintes frases:
//  Os dois números são pares;
//  Os dois números são ímpares;
//  Um par e um ímpar;
// Se existir pelo menos um número negativo ou igual a zero, exiba a frase informando: Existe
// pelo menos um número 0 ou negativo!

// n1 = parseInt(prompt("Digite o número 1: "));
// n2 = parseInt(prompt("Digite o número 2: "));

// if ((n1 > 0) && (n2 > 0)){ 
//     if ((n1 % 2 == 0) && (n1 % 2 == 0)) {
//         console.log("Os dois números pares!");
//     } else if ((n1 % 2 != 0) && (n2 % 2 != 0)) {
//         console.log("Os dois números ímpares!");
//     } else{ 
//         console.log("Um par e um ímpar!");
//     }
// } else {
//     console.log("Existe pelo menos um número 0 ou negativo!");
// }


// 2. Crie um algoritmo, utilizando a linguagem JavaScript, que receba pelo teclado os valores
// dos três ângulos internos de um triângulo. Depois verifique se é triângulo, de acordo com a
// Propriedade.
// Caso não seja triângulo mostre uma mensagem “Não é triângulo!”.
// Caso seja triângulo, mostre a classificação do triângulo quanto aos ângulos:
//  “Acutângulo” (três ângulos agudos)
//  “Retângulo” (um ângulo reto)
//  “Obtusângulo” (um ângulo obtuso)

// Propriedades:
// 1. A soma dos ângulos de um triângulo deve ser igual a 180 graus
// 2. Ângulo agudo: menor do que 90 graus
// 3. Ângulo reto: exatamente 90 graus
// 4. Ângulo obtuso: maior que 90 graus e menor que 180 graus

a1 = parseFloat(prompt("Digite o valor do ângulo 1: "));
a2 = parseFloat(prompt("Digite o valor do ângulo 2: "));
a3 = parseFloat(prompt("Digite o valor do ângulo 3: "));

// Caso seja Triângulo
if ((a1 + a2 + a3) == 180) { 
   // Triângulo Acutângulo
   if ((a1 < 90) && (a2 < 90) && (a3 < 90)) {
         console.log("Triângulo Acutângulo!");
   }
   // Triângulo Retângulo
   else if ((a1 == 90) || (a2 == 90) || (a3 == 90)) {
      console.log("Triângulo Retângulo!");
   }
   // Triângulo Obtusângulo
   else {  
      console.log("Triângulo Obtusângulo!");
   }
// Caso não seja Triângulo
} else {  
   console.log("Não é Triângulo!");
}

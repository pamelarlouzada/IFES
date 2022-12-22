const prompt = require("prompt-sync")();

//EXERCÍCIOS (AULA 09 - COMANDOS DE REPETIÇÃO)

// 1. Desenvolva um programa que imprime na tela os números entre 7 e 1000 que tem resto 3
// quando divididos por 7.

// for (i = 7; i <= 100; i++) {
//   if ( i % 7 == 3) {
//     console.log(i)
//   }
// }

// 2.	Faça um algoritmo que conte de 1 a 100 e a cada múltiplo de 10 emita uma mensagem: “Múltiplo de 10: <número>”.
// Na figura a seguir temos uma parte da exibição do resultado (neste caso, considerrando o intervalo de 1 até 20):

// for (i = 1; i <= 100; i++) {
//   if ( i % 10 == 0) {
//     console.log("Multiplo de 10:", i)
//   } else {
//     console.log(i)
//   }
// }

// 3. Desenvolva um algoritmo que obtêm números do usuário e os soma. A cada repetição algoritmo deve perguntar ao usuário 
// se o mesmo deseja continuar a digitar números. Enquanto o usuário digitar "s" o algoritmo continua a receber números e somá-los. 
// Quando o usuário digita qualquer outra coisa o algoritmo termina e apresenta o valor da soma dos números.

// var num1 = parseFloat(prompt("Digite um número: "));
// var continuar = "s"
// var cont = 0
// while (continuar == "s") {
//   var num = parseFloat(prompt("Digite mais um número: "));
//   if (cont == 0) {
//     num = num1 + num
//     console.log("A soma é: ", num)
//     continuar = prompt("Continuar (s/n): ")
//     cont ++
//   } else {
//     num += num
//     console.log("A soma é: ", num)
//     continuar = prompt("Continuar (s/n): ")
//   }
// }


// 4.	Faça um algoritmo que determine o maior entre N números inteiros positivos. A condição de parada é a entrada
//  de um valor 0, ou seja, o algoritmo deve ficar calculando o maior até que a entrada seja igual a 0 (ZERO).

// num = 1;   // valor apenas para entrar no while
// maior = 0; // valor inicial, apenas para iniciar a variável

// while (num != 0) {
//   num = parseInt(prompt('Digite um número: '));
//   if (num > maior) {
//     maior = num;
//   }
// }

// console.log('O maior número digitado foi:', maior);


// -------------------------------------------------------------------------------------------------------------------
// AULA 10 - COMANDOS DE REPETIÇÃO ANINHADOS

// 1.	Escreva um algoritmo que lê via teclado um número inteiro positivo e mostre na tela, como resultado, a quantidade de números
//  primos existentes entre 1 e n.


// primos = 0;
// n = parseInt(prompt("Digite um número: "));

// for (i = 1; i <= n; i++) {
//   divisores = 0;
//   for (j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       divisores = divisores + 1;
//     }
//   }

//   if (divisores == 2) {
//     primos = primos + 1;
//   }
// }

// console.log("A quantidade de números primos entre 1 e", n, "é:", primos);


// 2. Escreva um programa que mostre na tela os 3 primeiros números perfeitos. Um número perfeito é aquele que é igual à soma dos seus divisores.
//    **Exemplos de números perfeitos:**
//    6 = 1+2+3
   
//    28= 1+2+4+7+14

// perfeitos = 0;

// i = 2;
// while (perfeitos < 3) {
//   soma_divisores = 0;
//   j = i - 1;
//   while (j > 0) {
//     if (i % j == 0) {
//       soma_divisores = soma_divisores + j;
//     }
//     j = j - 1;
//   }
//   if (soma_divisores == i) {
//     perfeitos = perfeitos + 1;
//     console.log("Perfeito:", i);
//   }
//   i = i + 1;
// }
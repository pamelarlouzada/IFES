// Aula 04 - Variáveis
// 1. Na finalidade de conhecer melhor os tipos de variáveis existentes no JavaScript, 
// atribuir valores a elas, e mostrar na tela estes valores, construa o seguinte algoritmo:

idade = 20;
altura = 1.75;
nome = "José";
pagou = true;

console.log("Os valores atribuídos as variáveis são: ");
console.log("Idade: ", idade);
console.log("Altura: ", altura);
console.log("Nome: ", nome);
console.log("Pagou: ", pagou);

console.log("Os tipos das variáveis são: ");
console.log("idade ", typeof (idade));
console.log("altura ", typeof (altura));
console.log("nome ", typeof (nome));
console.log("pagou ", typeof (pagou));


// AULA 05 - OPERADORES
// 1. Elabore um algoritmo para testarmos a utilização dos operadores na linguagem JavaScript. 
a = 1;
b = 2;
c = 3;
d = "3";
e = false;
f = true;

console.log("a + b ** c - c % 2: ", a + b ** c - c % 2);
console.log("b * (c / a - a): ", b * (c / a - a));
console.log("(c == d) != e: ", (c == d) != e);
console.log("(b >= a) == f: ", (b >= a) == f);
console.log("(c !== d) && (b % 1 == 0): ", (c !== d) && (b % 1 == 0));

// AULA 06 - ENTRADA DE DADOS

// 1. Elabore um algoritmo para calcular o salário líquido de um determinado funcionário. 
// Você deve receber os seguintes valores: salário e imposto de renda. Com base nestes valores 
// você deverá encontrar o valor do salário líquido (salário líquido = salário – imposto de renda) e mostrar na tela o resultado.

const prompt = require('prompt-sync')();

salario = parseFloat(prompt('Digite o salário: '))
ir = parseFloat(prompt("Digite o imposto de renda: "))

liquido = salario - ir

console.log("O valor do salário liquido é: ", liquido)

// 2. Elabore um algoritmo para calcular o consumo de um determinado carro em um percurso qualquer. 
// Você deve receber os seguintes valores: modelo do carro, número de quilômetros percorridos e número 
// de litros de combustível gastos no percurso. Com base nestes valores você deverá encontrar o consumo (km/litro)
// do carro e mostrar na tela o resultado da seguinte forma: Exemplo: O consumo do carro ***gol*** é de ***18*** km/litro.

prompt = require("prompt-sync")();

carro = prompt("Digite o nome do carro: ")
km = parseFloat(prompt("Digite o número de km percorridos: "))
litros = parseFloat(prompt("Digite a quantidade de litros gastos: "))

consumo = km / litros

console.log("O consumo do carro ", carro, " é de ", consumo, " km/litro")



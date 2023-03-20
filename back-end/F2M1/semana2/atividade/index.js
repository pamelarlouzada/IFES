const prompt = require('prompt-sync')();
const funcoes = require('./funcoes.js');

// ______ Atividade 1 ______

// Recupera a placa
var placa = prompt('Digite a placa: ');
var final =  parseInt(placa[placa.length-1]);

// Recupera dia da semana: Sunday = 0, Monday = 1,
const d = new Date();
var diaSemana = d.getDay(); // 2

// Verifica se o carro pode circular no dia
funcoes.podeCircular(final, diaSemana);


// // ______ Atividade 2 ______
// var data = prompt('Digite uma data no formato DD/MM/AAAA: ');
// var data = data.split('/');
// var mes = data[1];
// if (mes == 0 | mes > 12) {
//   console.log('Mês inválido');
// } else {
//   var mesFormatado = funcoes.mesFormatado(mes)
//   console.log(`${data[0]} de ${mesFormatado} de ${data[2]}`);
// }


// ______ Atividade 3 ______
// try {
//   var num1 = parseInt(prompt('Digite um número: '));
//   var num2 = parseInt(prompt('Digite um número: '));

//   if (num2 == 0){
//       throw new Error('Digite um nº diferente de 0')
//   } else {
//     console.log("O resultado da divisão é ", num1/num2)
//   }
// }catch(ocorrencia){
//     console.log(ocorrencia.message);
// }


// ______ Atividade 4 ______
// const fs = require('fs');
// var data = fs.readFileSync('./pessoas.json','utf-8');

// var arquivo = JSON.parse(data);
// var pessoas = arquivo.pessoas;
// console.log(pessoas)




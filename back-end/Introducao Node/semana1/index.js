const prompt = require('prompt-sync')();
const calculadora = require('./calculadora');

// var idade = prompt('Digite sua idade: ');
// var nome = prompt('Digite seu nome: ');

// if(idade>18) {
//     console.log(nome + ' é Maior de idade');
// }else {
//     console.log(nome + ' é Menor de idade');
// }



// var num1 = Number(prompt('Digite um número: '));
// var num2 = Number(prompt('Digite outro número: '));

// console.log('A soma entre ' + num1 + ' e ' + num2 + ' é ', calculadora.adicao(num1,num2));
// console.log('A diferença entre ' + num1 + ' e ' + num2 + ' é ', calculadora.subtracao(num1,num2));
// console.log('A multiplicação entre ' + num1 + ' e ' + num2 + ' é ', calculadora.mult(num1,num2));
// console.log('A divisão entre ' + num1 + ' e ' + num2 + ' é ', calculadora.div(num1,num2));


// npm istall html-pdf   
// só instala no projeto

// npm istall -g html-pdf
// instala globalmente


// para ser instalado globalmente:

// npm istall -g create-react-app
// cria projeto no react

//npm install -g nodemon
// não startar toda vez

// fazer a importação:
// const pdf = require('html-pdf')

// npmjs.com para procurar os pacotes presentes no npm

// os arquivos ficam listados no packagepackage.json

var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./home.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('./home.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res);
});

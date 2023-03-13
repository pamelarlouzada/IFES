const prompt = require('prompt-sync')();
const funcoes = require('./funcoes.js');

for (let i = 0; i < 10; i++) {
    nome = prompt('Nome do aluno: ');
    nota = Number(prompt('Nota: '));
    lista_alunos_notas = funcoes.inserir(nome,nota);
};  

// para facilitar os testes: 
// lista_alunos_notas = [
//     { nome: 'Ana', nota: 10 },
//     { nome: 'Bia', nota: 20 },
//     { nome: 'Carol', nota: 30 },
//     { nome: 'Danilo', nota: 40 },
//     { nome: 'Eder', nota: 50 },
//     { nome: 'Fátima', nota: 60 },
//     { nome: 'Gabriel', nota: 70 },
//     { nome: 'Helena', nota: 80 },
//     { nome: 'Igor', nota: 90 },
//     { nome: 'Janice', nota: 100 }
//   ]
// console.log(lista_alunos_notas)

// a) a maior nota e o nome do aluno que a tirou
funcoes.calcMaiorNota(lista_alunos_notas);

// b) a menor nota e o nome do aluno que a tirou
funcoes.calcMenorNota(lista_alunos_notas);

// c) a média de todas as notas
funcoes.calcMedia(lista_alunos_notas);

// d & e) a quantidade de alunos APROVADOS e REPROVADOS 
funcoes.calcAprovados(lista_alunos_notas);



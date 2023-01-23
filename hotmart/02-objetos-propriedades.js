// https://programadorbr.club.hotmart.com/lesson/mBOnmbqZ7R/objetos-propriedades

var aluno = {
    nome: "Igor",
    notas: [5, 8],
    // nome e nota são considerados propriedade do objeto (são variáveis porem para obj chama-se propriedade)
    // uma propriedade de um objeto pode receber um valor de qualquer tipo que vimos até aqui. Incluindo Arrays, e até mesmo um outro objeto
}

// acessando o elemento
console.log(aluno.nome)
console.log(aluno["nome"])
console.log(aluno.notas)
console.log(aluno.notas[1])
console.log(aluno["notas"][1])

// é possível add propriedades mesmo depois do objeto criado?

aluno.matricula = 1234;
aluno['sobrenome'] = ['Souza'];
aluno['sobrenome'][1] = 'Pereira';
console.log(aluno)

// outra forma de criar um obj:
var aluno = new Object();
aluno.nome = "Maria";
aluno.notas = [1,2];
console.log(aluno)

// -------
var aluno = new Object({nome: "Bia", sobrenome:"Rocha"});

console.log(aluno)
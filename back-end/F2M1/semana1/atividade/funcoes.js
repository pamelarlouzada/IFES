var lista_alunos_notas = [];

exports.inserir = function inserir(nome,nota) { 
    var aluno_nota = {
      nome: nome,
      nota: nota
    } 
    lista_alunos_notas.push(aluno_nota);

    return lista_alunos_notas
};


exports.calcMaiorNota = function calcMaiorNota(lista_alunos_notas) {
    var maiorNota = 0; 
    var nomeMaiorNota =  '';  
    
    for (let aluno_nota of lista_alunos_notas) {
        
        if (aluno_nota.nota > maiorNota){
            maiorNota = aluno_nota.nota;
            nomeMaiorNota = aluno_nota.nome
        }; 
    }
    console.log('A maior nota foi do(a) aluno(o) ' , nomeMaiorNota , ', nota: ' , maiorNota)

}


exports.calcMenorNota = function calcMenorNota(lista_alunos_notas) {
    var menorNota = 101; 
    var nomeMenorNota =  '';  
    
    for (let aluno_nota of lista_alunos_notas) {
        
        if (aluno_nota.nota < menorNota) {
            menorNota = aluno_nota.nota;
            nomeMenorNota = aluno_nota.nome
        }
            
    }
    console.log('A menor nota foi do(a) aluno(o) ' , nomeMenorNota , ', nota: ' , menorNota)

}


exports.calcMedia = function calcMedia(lista_alunos_notas) {
    var lista_notas = [];
    var totalNotas = 0;
    for (let aluno_nota of lista_alunos_notas) {
        lista_notas.push(aluno_nota.nota)
        totalNotas += aluno_nota.nota
    }
    console.log('A média de notas da turma foi de: ', totalNotas/(lista_notas.length));
}


exports.calcAprovados = function calcAprovados (lista_alunos_notas) {
    var lista_notas = [];
    var aprovados = 0;
    var reprovados = 0;
    for (let aluno_nota of lista_alunos_notas) {
        lista_notas.push(aluno_nota.nota)
    }

    for (let i = 0; i < lista_notas.length; i++) {
        if (lista_notas[i] >= 60) {
          aprovados++;
        } else {
          reprovados++;
        };
    }; 
    console.log('O total de alunos APROVADOS foi de: ', aprovados);
    console.log('O total de alunos REPROVADOS foi de: ', reprovados);
}
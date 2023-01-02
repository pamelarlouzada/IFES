
var alunos = ["Ana", "Bia", "João"]
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]

function media(n1, n2){
    return (n1+n2)/2
}

function passou (media) {
    if (media > 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

for (var index in alunos) {

    var m = media(notasA[index], notasB[index])

    
    console.log(alunos[index], '- Média: ', m, passou(m))
    
}
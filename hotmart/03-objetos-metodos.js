// https://programadorbr.club.hotmart.com/lesson/xkOX5Ajp4W/objetos-metodos

var calcMedia = function(n1,n2){
        return (this.notas[0] + this.notas[1])/2
}

var aluno = {
    nome: "Igor",
    notas: [7, 8],
    media: calcMedia
}
var aluno1 = {
    nome: "João",
    notas: [6, 8],
    media: calcMedia
}



console.log(aluno)
console.log(aluno.media(aluno.notas[0],aluno.notas[1]))
console.log(aluno1)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))

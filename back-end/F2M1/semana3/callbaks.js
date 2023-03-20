// setTimeout(() => {
//     console.log("Esperei 2 segundos")
// }, 2000)


// // Exemplo 1
// function obterNome(callback){
//     var nome = prompt('Entre com o nome: ');
//     callback(nome);
// }

// obterNome((nome) => {
//     console.log(nome);
// });


// Exemplo 2
function cadastrarUsuario(callback){
    setTimeout(() => {
        // lógica de cadastro

        callback(new Error('Erro no registro'))
    }, 2000);
}

cadastrarUsuario((erro) => {
    if(erro){
        return console.log('Ocorreu um erro: ' + erro.message)
    }
    console.log('Usuário cadastrado');
})
function cadastrarUsuario(){
    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            // lógica de cadastro
            var erro = false;

            if (!erro){
                resolve('Sucesso');
            } else {
                reject('Erro');
            }
        }, 2000);
    } );
}

cadastrarUsuario()
.then((mensagem) => {
    console.log(mensagem);
})
.catch((mensagem) => {
    console.log(mensagem);
})

// Uma Promise possui diferentes estados, sendo alguns deles:
// Pendente (Pending);
// Resolvida (Resolved);
// Rejeitada (Rejected);
// Realizada (Fulfilled);
// Estabelecida (Settled).

